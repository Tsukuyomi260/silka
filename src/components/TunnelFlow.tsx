"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  BatteryCharging,
  Check,
  ChevronLeft,
  Lock,
  MessageCircle,
  ScanLine,
  ShieldCheck,
  Smartphone,
  TriangleAlert,
  Wallet,
} from "lucide-react";
import type { Listing } from "@/lib/data";
import { ESCROW_FEE, formatFcfa } from "@/lib/format";

type PayMethod = "mtn" | "moov";

const TIMELINE = [
  { label: "Payé", desc: "Paiement Mobile Money reçu" },
  { label: "Argent bloqué", desc: "Sécurisé chez Silka" },
  { label: "Téléphone reçu", desc: "Tu vérifies l'appareil" },
  { label: "Argent débloqué", desc: "Le vendeur est payé" },
];

const CHECK_ICONS = [ScanLine, Smartphone, BatteryCharging];

export function TunnelFlow({ listing }: { listing: Listing }) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [pay, setPay] = useState<PayMethod>("mtn");
  const [checks, setChecks] = useState([false, false, false]);

  const total = listing.price + ESCROW_FEE;
  const totalFmt = formatFcfa(total);
  const allChecked = checks.every(Boolean);
  const fichePath = `/annonces/${listing.id}`;

  const steps0 = [
    {
      icon: Wallet,
      green: false,
      title: "Tu paies via Mobile Money",
      desc: "L'argent est bloqué chez Silka — le vendeur ne le touche pas encore.",
    },
    {
      icon: Smartphone,
      green: false,
      title: "Tu reçois et tu vérifies",
      desc: "IMEI, écran, batterie… prends ton temps, l'argent reste bloqué.",
    },
    {
      icon: ShieldCheck,
      green: true,
      title: "Tu confirmes, le vendeur est payé",
      desc: "Un souci ? Tu es remboursé intégralement.",
    },
  ];

  const checklist = [
    {
      label: "L'IMEI correspond",
      desc: "Compose *#06# et compare avec l'annonce",
    },
    { label: "Écran et boutons OK", desc: "Pas de fissure, tactile fluide" },
    { label: "Batterie conforme", desc: `Niveau annoncé : ${listing.batt}` },
  ];

  function back() {
    if (step === 0 || step === 4) {
      router.push(fichePath);
    } else {
      setStep(step - 1);
    }
  }

  function toggleCheck(i: number) {
    setChecks((prev) => prev.map((c, idx) => (idx === i ? !c : c)));
  }

  // Active timeline node index (shown at step 2 → node 1 "Argent bloqué").
  const activeNode = step >= 4 ? 4 : step >= 3 ? 2 : 1;

  return (
    <>
      <div className="flex flex-none items-center gap-3 px-5 pb-3 pt-[18px]">
        <button
          type="button"
          onClick={back}
          aria-label="Retour"
          className="flex h-[38px] w-[38px] shrink-0 cursor-pointer items-center justify-center rounded-full bg-cream text-indigo"
        >
          <ChevronLeft size={20} strokeWidth={2.2} />
        </button>
        <div className="flex flex-1 flex-col gap-0.5">
          <div className="font-display text-[16px] font-bold text-ink">
            Achat sécurisé
          </div>
          <div className="font-sans text-[11.5px] font-medium text-ink/50">
            {listing.title} · {formatFcfa(listing.price)}
          </div>
        </div>
        <div className="font-mono-label text-[11px] font-semibold text-indigo/60">
          Étape {Math.min(step, 3) + 1}/4
        </div>
      </div>

      <div className="flex flex-none gap-[5px] px-5 pb-[18px]">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-pill ${
              i <= Math.min(step, 3) ? "bg-indigo" : "bg-indigo/15"
            }`}
          />
        ))}
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
        {step === 0 && (
          <div className="animate-screen-in flex flex-col gap-[18px] px-5 pb-[30px] pt-1.5">
            <div className="flex h-[76px] w-[76px] items-center justify-center self-center rounded-full bg-indigo/7">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo text-sand">
                <ShieldCheck size={22} strokeWidth={2} />
              </div>
            </div>
            <div className="text-center font-display text-[21px] font-bold leading-tight text-ink">
              Ton argent est protégé,
              <br />
              voici comment
            </div>
            <div className="flex flex-col gap-3">
              {steps0.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="flex items-start gap-3.5 rounded-card bg-cream p-4"
                  >
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                        s.green ? "bg-trust text-white" : "bg-indigo text-cream"
                      }`}
                    >
                      <Icon size={18} strokeWidth={2} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <div className="font-sans text-[13.5px] font-bold text-ink">
                        {s.title}
                      </div>
                      <div className="font-sans text-[12px] font-medium leading-relaxed text-ink/60">
                        {s.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="cursor-pointer rounded-btn bg-indigo p-4 text-center font-sans text-[15px] font-semibold text-cream transition-colors hover:bg-indigo-hover"
            >
              J&apos;ai compris, je paie
            </button>
          </div>
        )}

        {step === 1 && (
          <div className="animate-screen-in flex flex-col gap-4 px-5 pb-[30px] pt-1.5">
            <div className="font-display text-[19px] font-bold text-ink">
              Paiement Mobile Money
            </div>
            <div className="flex flex-col gap-[9px] rounded-card bg-cream p-4">
              <div className="flex justify-between font-sans text-[13px] font-medium text-ink/70">
                <span>{listing.title}</span>
                <span>{formatFcfa(listing.price)}</span>
              </div>
              <div className="flex justify-between font-sans text-[13px] font-medium text-ink/70">
                <span>Protection Silka</span>
                <span>{formatFcfa(ESCROW_FEE)}</span>
              </div>
              <div className="h-px bg-black/8" />
              <div className="flex justify-between font-display text-[15px] font-bold text-indigo">
                <span>Total</span>
                <span>{totalFmt}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              {(
                [
                  { id: "mtn", label: "MTN MoMo", logo: "MTN", bg: "bg-mtn", fg: "text-[#1a1a1a]", size: "text-[10px]" },
                  { id: "moov", label: "Moov Money", logo: "MOOV", bg: "bg-moov", fg: "text-white", size: "text-[9px]" },
                ] as const
              ).map((m) => {
                const selected = pay === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setPay(m.id)}
                    className={`flex items-center gap-3 rounded-card-sm border-2 p-3.5 text-left transition-colors ${
                      selected
                        ? "border-indigo bg-indigo/4"
                        : "border-black/12 bg-white"
                    }`}
                  >
                    <div
                      className={`flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] font-display font-extrabold ${m.bg} ${m.fg} ${m.size}`}
                    >
                      {m.logo}
                    </div>
                    <div className="flex-1 font-sans text-[13.5px] font-bold text-ink">
                      {m.label}
                    </div>
                    <div
                      className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                        selected ? "border-indigo" : "border-black/12"
                      }`}
                    >
                      <div
                        className={`h-2.5 w-2.5 rounded-full ${
                          selected ? "bg-indigo" : "bg-transparent"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="font-sans text-[12px] font-semibold text-ink/60">
                Numéro Mobile Money
              </div>
              <input
                inputMode="tel"
                placeholder="+229 01 97 00 00 00"
                className="rounded-btn border-[1.5px] border-indigo/25 bg-white p-3.5 text-[14px] text-ink focus:outline-2 focus:outline-indigo/35"
              />
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="cursor-pointer rounded-btn bg-indigo p-4 text-center font-sans text-[15px] font-semibold text-cream transition-colors hover:bg-indigo-hover"
            >
              Payer {totalFmt}
            </button>
            <div className="text-center font-sans text-[11px] font-medium leading-relaxed text-ink/45">
              Tu recevras une demande de confirmation sur ton téléphone.
              L&apos;argent sera bloqué chez Silka, pas envoyé au vendeur.
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-screen-in flex flex-col gap-[18px] px-5 pb-[30px] pt-1.5">
            <div className="flex h-[76px] w-[76px] items-center justify-center self-center rounded-full bg-trust/12 text-trust">
              <Lock size={30} strokeWidth={2} />
            </div>
            <div className="flex flex-col gap-1.5 text-center">
              <div className="font-display text-[21px] font-bold text-ink">
                Argent bloqué en sécurité
              </div>
              <div className="font-sans text-[13px] font-medium leading-relaxed text-ink/60">
                {totalFmt} sont chez Silka. Contacte le vendeur pour récupérer
                ton téléphone, puis vérifie-le tranquillement.
              </div>
            </div>

            <div className="flex flex-col rounded-card bg-cream px-4 py-[18px]">
              {TIMELINE.map((node, i) => {
                const done = i < activeNode;
                const active = i === activeNode;
                return (
                  <div key={node.label} className="flex items-start gap-3.5">
                    <div className="flex flex-none flex-col items-center">
                      <div
                        className={`flex h-[26px] w-[26px] items-center justify-center rounded-full border-2 text-[12px] font-bold ${
                          done
                            ? "border-trust bg-trust text-white"
                            : active
                              ? "border-indigo bg-indigo text-white"
                              : "border-black/15 bg-white text-ink/35"
                        }`}
                      >
                        {done ? <Check size={14} strokeWidth={3} /> : i + 1}
                      </div>
                      {i < TIMELINE.length - 1 && (
                        <div
                          className={`h-[26px] w-0.5 ${
                            done ? "bg-trust" : "bg-black/12"
                          }`}
                        />
                      )}
                    </div>
                    <div className="flex flex-col gap-px pt-[3px]">
                      <div
                        className={`font-sans text-[13px] font-bold ${
                          done || active ? "text-ink" : "text-ink/40"
                        }`}
                      >
                        {node.label}
                      </div>
                      <div className="font-sans text-[11px] font-medium text-ink/45">
                        {node.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => router.push(`${fichePath}/chat`)}
              className="flex cursor-pointer items-center justify-center gap-2 rounded-btn border-[1.5px] border-indigo/35 p-3.5 text-center font-sans text-[14px] font-semibold text-indigo"
            >
              <MessageCircle size={17} strokeWidth={2} />
              Écrire au vendeur
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              className="cursor-pointer rounded-btn bg-indigo p-4 text-center font-sans text-[15px] font-semibold text-cream transition-colors hover:bg-indigo-hover"
            >
              J&apos;ai reçu le téléphone
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="animate-screen-in flex flex-col gap-4 px-5 pb-[30px] pt-1.5">
            <div className="font-display text-[19px] font-bold text-ink">
              Vérifie avant de confirmer
            </div>
            <div className="font-sans text-[13px] font-medium leading-relaxed text-ink/60">
              Coche chaque point. Une fois confirmé, le vendeur reçoit
              l&apos;argent — c&apos;est définitif.
            </div>
            <div className="flex flex-col gap-2.5">
              {checklist.map((item, i) => {
                const on = checks[i];
                const Icon = CHECK_ICONS[i];
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => toggleCheck(i)}
                    className={`flex items-center gap-3 rounded-card-sm border-2 px-3.5 py-[15px] text-left transition-colors ${
                      on
                        ? "border-trust/50 bg-trust/6"
                        : "border-black/9 bg-white"
                    }`}
                  >
                    <div
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border-2 text-white ${
                        on ? "border-trust bg-trust" : "border-black/20 bg-white"
                      }`}
                    >
                      {on ? (
                        <Check size={15} strokeWidth={3} />
                      ) : (
                        <Icon size={13} strokeWidth={2} className="text-ink/35" />
                      )}
                    </div>
                    <div className="flex flex-col gap-px">
                      <div className="font-sans text-[13px] font-bold text-ink">
                        {item.label}
                      </div>
                      <div className="font-sans text-[11px] font-medium text-ink/50">
                        {item.desc}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              disabled={!allChecked}
              onClick={() => allChecked && setStep(4)}
              className={`rounded-btn bg-trust p-4 text-center font-sans text-[15px] font-semibold text-white transition-opacity ${
                allChecked ? "cursor-pointer" : "cursor-not-allowed opacity-40"
              }`}
            >
              Je confirme — libérer l&apos;argent
            </button>
            <button
              type="button"
              className="flex cursor-pointer items-center justify-center gap-1.5 p-1.5 text-center font-sans text-[13px] font-semibold text-alert"
            >
              <TriangleAlert size={15} strokeWidth={2} />
              Signaler un problème
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="animate-screen-in flex flex-col items-center gap-[18px] px-5 pb-[30px] pt-5 text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-trust text-white shadow-[0_12px_32px_rgba(46,158,107,0.35)]">
              <Check size={44} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="font-display text-[23px] font-bold text-ink">
                C&apos;est réglé !
              </div>
              <div className="font-sans text-[13.5px] font-medium leading-relaxed text-ink/60">
                Le vendeur a reçu son argent et ton {listing.title} est à toi.
                Merci d&apos;avoir acheté en sécurité avec Silka.
              </div>
            </div>
            <div className="flex w-full flex-col gap-2 rounded-card bg-cream p-4 text-left">
              <div className="flex items-center justify-between font-sans text-[12.5px] font-medium text-ink/65">
                <span>Payé</span>
                <span className="flex items-center gap-1 whitespace-nowrap font-bold text-trust">
                  <Check size={14} strokeWidth={3} /> {totalFmt}
                </span>
              </div>
              <div className="flex items-center justify-between font-sans text-[12.5px] font-medium text-ink/65">
                <span>Bloqué → vérifié → débloqué</span>
                <Check size={15} strokeWidth={3} className="text-trust" />
              </div>
              <div className="flex items-center justify-between font-sans text-[12.5px] font-medium text-ink/65">
                <span>Vendeur payé</span>
                <Check size={15} strokeWidth={3} className="text-trust" />
              </div>
            </div>
            <div className="flex w-full flex-col gap-2.5">
              <button
                type="button"
                onClick={() => router.push(`/vendeurs/${listing.sellerId}`)}
                className="cursor-pointer rounded-btn bg-indigo p-4 font-sans text-[15px] font-semibold text-cream transition-colors hover:bg-indigo-hover"
              >
                Laisser un avis
              </button>
              <button
                type="button"
                onClick={() => router.push("/")}
                className="cursor-pointer rounded-btn border-[1.5px] border-indigo/35 p-3.5 font-sans text-[14px] font-semibold text-indigo"
              >
                Retour à l&apos;accueil
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

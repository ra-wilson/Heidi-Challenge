# Heidi Application Challenge

## Overview
This repository contains `kinetic-share`, a Next.js prototype for a reciprocal patient-data sharing network to encourage clinics to opt in to patient data sharing.

The app demonstrates how clinic membership tier and sharing opt-in affect access to external patient history, and tracks simple ROI metrics from user behavior.

## Stack
- Next.js 15 (App Router)
- React
- TypeScript
- Tailwind CSS
- Zustand (persisted local state)

## Demo Flow
1. Open `/patients` and select a patient profile.
2. Switch to **External History**.
3. Use top-right **Demo Controls** to change tier (`out`, `Basic`, `Standard`, `Full`) and sharing opt-in.
4. Re-check access to see locked vs unlocked records.
5. Open `/roi` to view:
   - external histories viewed
   - minutes saved
   - locked history attempts

## Core Routes
- `/` Dashboard
- `/join` Join explanation
- `/tiers` Tier selection
- `/patients` Patient list
- `/patients/[id]` Patient profile with gated external history
- `/roi` ROI metrics
- `/settings/network` Opt-in and tier controls

## Notes
- Data is mocked.
- App state is stored client-side via Zustand persistence.

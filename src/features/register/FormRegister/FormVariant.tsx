'use client';

import { useState } from 'react';

import { StepEmailPassword, StepUserInfo } from './components';
import { EStepFormVariants } from './types';

export const FormVariant = () => {
  const [step, setStep] = useState<EStepFormVariants>(EStepFormVariants.EmailPassword);

  if (step === EStepFormVariants.UserInfo) {
    return <StepUserInfo setStep={setStep} />;
  }

  if (step === EStepFormVariants.EmailPassword) {
    return <StepEmailPassword setStep={setStep} />;
  }

  return null;
};

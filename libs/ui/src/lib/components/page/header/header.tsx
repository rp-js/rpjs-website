'use client';

import Image from 'next/image';
import { useState } from 'react';
import { signIn, signOut } from 'next-auth/react';

import { LoginModal } from '../../login-modal';
import { HeaderAction } from './header-actions';

const loginModalAction = (type: 'google' | 'github') => {
  if (type === 'google') {
    return signIn('google');
  }

  if (type === 'github') {
    return signIn('github');
  }
};

export function Header() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>('');

  const openModal = (type: string) => {
    setModalVisible(true);
    setModalType(type);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      <header className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Image
                className="flex-shrink-0 mr-4"
                src="/logo.svg"
                alt="logo amarelo escrito r p j s"
                width={44}
                height={44}
              />
              <div className="text-black font-sans font-bold text-xl hidden md:block">RP.js</div>
            </div>

            <HeaderAction
              openModal={openModal}
              onSignOutClick={() => {
                signOut();
              }}
            />
          </div>
        </div>
      </header>

      <LoginModal
        isOpen={modalVisible}
        setIsOpen={setModalVisible}
        modalType={modalType}
        onLoginClick={loginModalAction}
      />
    </>
  );
}

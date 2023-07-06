'use client';

import Image from 'next/image';
import { Button } from '../button';
import { useState } from 'react';
import { LoginModal } from '../login-modal';

export function Header() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>('');

  function openModal(type: string) {
    setModalVisible(true);
    setModalType(type);
    document.body.style.overflow = 'hidden';
  }

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
            <div className="ml-4 flex items-center md:ml-6 gap-3">
              <Button
                button="secondary"
                type="button"
                onClick={() => {
                  openModal('Entre');
                }}
              >
                Entrar
              </Button>
              <Button
                button="primary"
                type="button"
                onClick={() => {
                  openModal('Registre-se');
                }}
              >
                Registrar
              </Button>
            </div>
          </div>
        </div>
      </header>
      <LoginModal isOpen={modalVisible} setIsOpen={setModalVisible} modalType={modalType} />
    </>
  );
}

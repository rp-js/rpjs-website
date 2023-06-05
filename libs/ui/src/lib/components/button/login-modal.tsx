'use client';

import Image from 'next/image';
import { Modal } from 'antd';
import { Dispatch, Fragment, SetStateAction } from 'react';
import ButtonComponent from './button-component';

interface LoginModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function LoginModal({ isOpen, setIsOpen }: LoginModalProps) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal centered okType="default" open={isOpen} onOk={closeModal} onCancel={closeModal} footer={null}>
      <Image
        className="flex-shrink-0 mx-auto mb-4"
        src="/logo.svg"
        alt="logo amarelo escrito r p j s"
        width={44}
        height={44}
      />
      <h1 className=" text-center font-bold text-xl mb-4">Login</h1>
      <p className="text-center   text-gray-500  text-lg">
        Entre em nosso site, tenha acesso ao seu perfil, inscreva-se no próximo evento e muito mais com apenas alguns
        cliques.
      </p>
      <div className="flex flex-col gap-3 mt-4">
        <ButtonComponent type="button" button="primary" onClick={closeModal}>
          Entrar com o Google
        </ButtonComponent>

        <ButtonComponent type="button" button="primary" onClick={closeModal}>
          Entrar com o GitHub
        </ButtonComponent>
      </div>
    </Modal>
  );
}

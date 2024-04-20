"use client"
import Link from 'next/link'
import React from 'react'
import { closeMenu } from '../modal'

function Modal() {
  return (
    <dialog id="my_modal_3" className="modal">
    <div className="modal-box bg-white w-full rounded-none min-h-[100vh]">
      <form method="dialog">
        <button className="btn btn-lg text-[#262626] btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <h3 className="font-bold text-lg text-[#262626]">Список меню</h3>
      <div className="mt-[16vh] flex flex-col gap-4 text-white  ">
        <Link href={"/"}>
          <button onClick={closeMenu} className="w-full rounded-r-full bg-[#327BD2] h-[56px] flex justify-center items-center font-bold text-[20px]">
            Главная
          </button>
        </Link>
        <button onClick={closeMenu}  className="w-full rounded-r-full bg-[#327BD2] h-[56px] flex justify-center items-center font-bold text-[20px]">
          О нас
        </button>
        <button onClick={closeMenu}  className="w-full rounded-r-full bg-[#327BD2] h-[56px] flex justify-center items-center font-bold text-[20px]">
          Отзывы
        </button>
      </div>
    </div>
  </dialog>
  )
}

export default Modal
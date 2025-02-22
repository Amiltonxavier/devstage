import Image from 'next/image'
import React from 'react'
import logo from '../../../assets/logo.svg'

import { InviteLinkInput } from './invite-link-input'
import { Ranking } from './ranking'
import { Stats } from './stats'

interface InvitePageProps {
  params: Promise<{
    subscribeId: string
  }>
}

export default async function InvitePage(props: InvitePageProps) {
  const { subscribeId } = await props.params

  const inviteLink = `http://localhost:3333/invites/${subscribeId}`
  return (
    <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <Image src={logo} alt="devstage" width={108.4} height={30} />

        <div className="space-y-2">
          <h1 className="text-4xl font-semibold font-heading leading-none text-gray-100">
            Inscrição confirmada
          </h1>
          <p className="text-gray-300 ">
            Paraa entrar no evento, acesse o link enviado para o seu e-mail.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
              Indique e Ganhe
            </h2>
            <p className="text-gray-300">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>
        </div>
        <InviteLinkInput inviteLink={inviteLink} />
        <Stats subscribeId={subscribeId} />
      </div>
      <Ranking />
    </div>
  )
}

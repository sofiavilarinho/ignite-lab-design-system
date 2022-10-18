import { Checkbox } from "@radix-ui/react-checkbox";
import { Envelope, Lock } from "phosphor-react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { Logo } from "../Logo";
import { FormEvent, useState } from "react";
import axios from 'axios'


export function SignIn(){

  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  async function handleSignIn(event:FormEvent){

    event.preventDefault()

    await axios.post('/sessions', {
      email: 'sofiavilarinho@hotmail.com',
      password: '12345678',
    })

    setIsUserSignedIn(true)
    

  }


  return (
      <div className='bg-gray-900 w-screen h-screen flex flex-col items-center justify-center text-gray-100'>
        <header className='flex flex-col items-center'>
          <Logo />

          <Heading size='lg' className='mt-4'>
            Ignite Lab
          </Heading>

          <Text size='lg' className='text-gray-400 1'>
            Faça o login e comece a usar!
          </Text>
        </header>


        <form onSubmit={handleSignIn} className='flex flex-col items-stretch w-full max-w-sm mt-10'>
          {isUserSignedIn && <Text>Login efetuado!</Text>}
           
          <label htmlFor="email" className='flex flex-col gap-3'>
            <Text className='font-semibold'>
              Endereço de e-mail
            </Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>

              <TextInput.Input type='email' id='email' placeholder='Digite o seu e-mail' />
            </TextInput.Root>
          </label>

          <label htmlFor="password" className='flex flex-col gap-3 mt-4'>
            <Text className='font-semibold'>
              Palavra-Passe
            </Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>

              <TextInput.Input type='password' id='password' placeholder='*****' />
            </TextInput.Root>
          </label>

          <label htmlFor="remember" className='flex items-center gap-2 mt-4'>
            <Checkbox id='remember' />
            <Text size='sm' className='text-gray-200'>Lembrar de mim durante 30 dias</Text>
          </label>

          <Button className='mt-8' type='submit'> Entrar na plataforma
          </Button>

        </form>

        <footer className='flex flex-col items-center gap-4 mt-8'>
          <Text asChild size='sm'>
            <a href="" className='text-gray-400 underline hover:text-gray-200'>Esquece-se da sua password?</a>
          </Text>

          <Text asChild size='sm'>
            <a href="" className='text-gray-400 underline hover:text-gray-200'>Não tem conta? Crie uma agora!</a>
          </Text>
        </footer>

      </div>
  )
}

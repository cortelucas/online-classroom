import { NextPage } from 'next';
import Nav from '../components/nav';
import Head from 'next/head';
import { signIn, signOut, useSession } from 'next-auth/client'

const AppPage: NextPage = () => {
  const [ session, loading ] = useSession()

  return (   
    <div>
      <Nav />
      <h1 className="text-3xl">Bem vindo a página App</h1>
      {!session && <>
        <div className="text-3xl">
          Not signed in <br/>
          <button onClick={(): Promise<void> => signIn("auth0")}>Sign in</button>
        </div>
      </>}
      {session && <>
        <div className="text-3xl">
          Signed in as {session.user.email} <br/>
          <button onClick={(): Promise<void> => signOut()}>Sign out</button>
        </div>
      </>}
      {loading && (
        <div className="text-5xl">
          <h1>Carregando</h1>
        </div>
      )}
    </div>
    
  )
}
export default AppPage;
import './App.css';

function App() {
  return (
    <div className='bg-[#121214] w-full h-88 absolute top-0 left-0'>
      <header className='w-80 mt-16'>
        <h1 className='mb-6 font-sans font-bold leading-10 text-white text-3xl' >Crie e compartilhe seu evento.</h1>
        <p className='text-xs leading-6 text-cyan-400'>O primeiro passo é, preencher esse formulário de inscrção.</p>
      </header>

      <form className='mt-10 bg-[#fafafc] rounded-t-lg min-h-full p-16 flex flex-col gap-12'>

        <fieldset className='rounded-none'>

          <div className='flex flex-col gap-6'>
            <legend className='font-sans font-semibold text-2xl leading-6 w-full border-b-2 border-gray-100 pb-4'>Informações do evento</legend>

            <div className='flex flex-col'>
              <label className='text-base leading-6 text-gray-500 mb-2'>Titulo do evento <span className='ml-3 text-sm leading-5 text-gray-500'>(mínimo 8 caracteres)</span></label>
              <input className='bg-[#FAFAFC] border-2 rounded-lg border-slate-200 h-14 pb-6 text-base leading-6 text-gray-500'  type='text' required minLength={'8'}/>
            </div>

            <div className='flex flex-col'>
              <label className='text-base leading-6 text-gray-500 mb-2'>Link do evento <span className='ml-3 text-sm leading-5 text-gray-500'>(comece com https://)</span></label>
              <input className='bg-[#FAFAFC] border-2 rounded-lg border-slate-200 h-14 pb-6 text-base leading-6 text-gray-500' type='url'/>
            </div>

            <div className='flex flex-col'>
              <label className='text-base leading-6 text-gray-500 mb-2'>Whatsapp para contato <span className='ml-3 text-sm leading-5 text-gray-500'>(somente números)</span></label>
              <input className='bg-[#FAFAFC] border-2 rounded-lg border-slate-200 h-14 pb-6 text-base leading-6 text-gray-500' type='numer'/>
            </div>

            <div className='flex flex-col'>
              <label className='text-base leading-6 text-gray-500 mb-2'>Informações extras</label>
              <textarea className='bg-[#FAFAFC] border-2 rounded-lg border-slate-200 h-40 pb-6 text-base leading-6 text-gray-500'></textarea>
            </div>

            <div className='flex flex-col'>
              <label className='text-base leading-6 text-gray-500 mb-2'>Categoria</label>
              <select className='bg-[#FAFAFC] border-2 rounded-lg border-slate-200 h-14 pb-6 text-base leading-6 text-gray-500'>
                <option value={'live'}>Ao vivo</option>
                <option value={'podcast'}>Podcast</option>
                <option value={'mentorship'}>Mentoria</option>
              </select>
            </div>

          </div>

        </fieldset>

        <fieldset className='rounded-none'>

          <div className='flex flex-col gap-6'>

            <legend className='font-sans font-semibold text-2xl leading-6 w-full border-b-2 border-gray-100 pb-4'>Privacidade</legend>

            <div className='flex flex-col'>
              <label className='text-base leading-6 text-gray-500 mb-2'>E-mail de administrador <span  className='ml-3 text-sm leading-5 text-gray-500'>(digite um email válido)</span></label>
              <input className='bg-[#FAFAFC] border-2 rounded-lg border-slate-200 h-14 pb-6 text-base leading-6 text-gray-500' type='email'/>
            </div>

            <div className='flex flex-col'>
              <label className='text-base leading-6 text-gray-500 mb-2'>Senha de acesso para os participantes <span className='ml-3 text-sm leading-5 text-gray-500'>(mínimo 8 caracteres)</span></label>
              <input className='bg-[#FAFAFC] border-2 rounded-lg border-slate-200 h-14 pb-6 text-base leading-6 text-gray-500' type='password' required minLength={'8'}/>
            </div>

            <div className='flex flex-col'>
              <input className='bg-[#fcfafa] border-2 rounded-lg border-slate-200 h-3 pb-6 text-base leading-6 text-gray-500' type='checkbox'/>
              <label className='text-base leading-6 text-gray-500 mb-2'>Evento privado</label>
            </div>

          </div>

        </fieldset>

        <fieldset className='rounded-none'>

          <div className='flex flex-col gap-6'>

            <legend className='font-sans font-semibold text-2xl leading-6 w-full border-b-2 border-gray-100 pb-4'>Dia e hora</legend>

            <div className='flex gap-5'>

              <div className='flex flex-col'>
                <label className='text-base leading-6 text-gray-500 mb-2' >Data</label>
                <input className='bg-[#fcfafa] border-2 rounded-lg border-slate-200 h-6 pb-8 text-base leading-6 text-gray-500' type='date'/>
              </div>

              <div className='flex flex-col'>
                <label className='text-base leading-6 text-gray-500 mb-2'>Das</label>
                <input className='bg-[#fcfafa] border-2 rounded-lg border-slate-200 h-6 pb-8 text-base leading-6 text-gray-500' type='time'/>
              </div>

              <div className='flex flex-col'>
                <label className='text-base leading-6 text-gray-500 mb-2'>Até</label>
                <input className='bg-[#fcfafa] border-2 rounded-lg border-slate-200 h-6 pb-8 text-base leading-6 text-gray-500' type='time'/>
              </div>

            </div>

          </div>

        </fieldset>

      </form>

      <footer>
        <button type='sumbit'>
          Slavar evento
        </button>
      </footer>

    </div>
  );
}

export default App;

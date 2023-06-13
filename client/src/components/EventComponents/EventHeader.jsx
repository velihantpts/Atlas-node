import React from 'react'

function EventHeader() {
    return (
        <div className="px-12 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div className="pl-24 flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
                Etkinlikler
                <br className="hidden md:block" />
                {' '}
                <span className="inline-block text-deep-purple-accent-400"></span>
              </h2>
              <p className="text-gray-700 text-base md:text-lg">Isparta, her mevsimde birbirinden renkli ve keyifli etkinliklere ev sahipliği yapıyor. Eğer siz de şehrimizdeki etkinlikleri takip etmek ve kaçırmamak istiyorsanız, doğru yerdesiniz! 
              <br></br><br></br>İşte hemen Isparta'da bu yıl gerçekleşecek etkinliklerden haberdar olmak için takvimine bir göz atmayı unutma. Eğer siz de şehrimizdeki keyifli etkinlikleri kaçırmak istemiyorsanız, takviminizi hazırlayın ve festival ruhunu doyasıya yaşayın!</p>
            </div>
         
          </div>
          <div className="flex items-center justify-center lg:w-1/2">
            <div className="w-2/5">
              <img className="object-cover" src="https://kitwind.io/assets/kometa/one-girl-phone.png" alt="" />
            </div>
            <div className="w-5/12 -ml-16 lg:-ml-32">
              <img className="object-cover" src="https://kitwind.io/assets/kometa/two-girls-phone.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      );
}

export default EventHeader
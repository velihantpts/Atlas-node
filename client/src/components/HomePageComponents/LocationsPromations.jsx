import { ChartBarIcon, QrCodeIcon, UserGroupIcon } from '@heroicons/react/20/solid'

import './places_comp.css'
const features = [
  {
    name: 'Potansiyel müşterilere kolayca ulaşabilme',
    description:
      'Atlas platformu üzerinde işletme sahipleri, işletmelerinin dijital ortamda görünürlüğünü artırarak, potansiyel müşterilerin dikkatini çekebilirler. Kullanıcılar, uygulama üzerinden yapacakları aramalarla işletmeleri keşfedebilir, işletme tanıtım sayfalarındaki bilgileri inceleyebilir ve işletme sahipleriyle doğrudan iletişim kurabilirler. Bu sayede, işletmeler müşterilerine daha kolay ulaşabilir ve potansiyel müşterilerle bağlantı kurarak iş hacimlerini artırabilirler.',
    icon: UserGroupIcon,
  },
  {
    name: 'İşletme tanıtım sayfası',
    description: 'İşletme tanıtım sayfası, işletme sahiplerine işletmelerinin dijital ortamda tanıtımını yapabilme imkanı sunar. İşletme sahipleri, işletmelerinin fotoğraflarını, açık adresini, çalışma saatlerini, menülerini ve benzeri bilgileri burada paylaşarak, potansiyel müşterilere ulaşabilirler.',
    icon: ChartBarIcon,
  },
  {
    name: 'QR menü oluşturma imkanı',
    description: 'QR menü oluşturma özelliği, işletme sahiplerine müşterilerinin kolayca menüye erişebilmeleri için bir QR kodu oluşturma imkanı sunar. Bu sayede müşteriler, telefonlarıyla QR kodunu okutarak menüye hızlı ve kolay bir şekilde erişebilirler. İşletme sahipleri de bu sayede, basılı menülerin maliyetlerinden ve süreçlerinden kurtulabilirler.',
    icon: QrCodeIcon,
  },
]

export default function LocationPromations() {
  return (
    <div className="relative">
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="banner d-flex align-items-center mt-5">
<div class="banner-left">
  
<div className="lg:max-w-lg">
      <h2 className="text-base font-semibold leading-7 italic text-indigo-600">İşletme sahiplerine özel avantajlar</h2>
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Daha iyi bir işletme için</p>
      <p className="mt-6 text-lg leading-8 text-gray-600">
      Atlas olarak, işletme sahiplerinin işlerini kolaylaştırmak için birçok özellik sunuyoruz. Bu özellikler arasında, QR menü oluşturma imkanı, işletme tanıtımı yapabilme fırsatı ve potansiyel müşterilere kolayca ulaşabilme gibi avantajlar bulunuyor. Bu sayede işletme sahipleri, işlerini daha verimli bir şekilde yönetebilirler. 
      </p>
      <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
        {features.map((feature) => (
          <div key={feature.name} className="relative pl-9">
            <dt className="inline font-semibold text-gray-900">
              <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
              {feature.name}
            </dt>{' '}
            <dd className="inline">{feature.description}</dd>
          </div>
        ))}
      </dl>
    </div>
</div>
<div class="banner-right d-flex">
    <div class="family">
        <img src="https://yudiz.com/codepen/real-estate/property-img-one.png" alt="img" class="img-fluid"></img>
        <img src="https://yudiz.com/codepen/real-estate/property-img-two.png" alt="img" class="img-fluid"></img>
        <div class="banner-right-inner">
            <h2>Isparta</h2>
            <span>Kafeler </span>
   
        </div>
        <img src="https://yudiz.com/codepen/real-estate/property-img-three.png" alt="img" class="img-fluid"></img>
        <img src="https://yudiz.com/codepen/real-estate/property-img-four.png" alt="img" class="img-fluid"></img>
    </div>
    <div class="sale">
        <img src="https://yudiz.com/codepen/real-estate/property-img-five.png" alt="img" class="img-fluid"></img>
        <img src="https://yudiz.com/codepen/real-estate/property-img-six.png" alt="img" class="img-fluid"></img>
        <div class="banner-right-inner">
            <h2 className='mekanlarSliderTitle'>Isparta</h2>
            <span>Restoranlar</span>
    
        </div>
        <img src="https://yudiz.com/codepen/real-estate/property-img-seven.png" alt="img" class="img-fluid"></img>
        <img src="https://yudiz.com/codepen/real-estate/property-img-eight.png" alt="img" class="img-fluid"></img>
    </div>
</div>
</div>

    </div>
       </div>
       </div>
  )
}

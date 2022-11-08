import BlanqueadoTapaRoja from '../../assets/productos/blanqueador_tapa_roja.svg'
import LimpiadorPocetaCiclon from '../../assets/productos/limpiador_de_poceta_ciclon.svg'
import JabonAntibacterial from '../../assets/productos/jabon_antibacterial.svg'
import Antibacterial from '../../assets/productos/antibacterial.svg'
import Ambientador from '../../assets/productos/ambientador.svg'
import LimpiadorAerosolPremio from '../../assets/productos/limpiador-aerosol_premio.svg'
import LimpiadorAerosol from '../../assets/productos/limpiador_aerosol.svg'
import CepilloTipoPlancha from '../../assets/productos/cepillo_tipo_plancha.svg'
import Mopa from '../../assets/productos/mopa.svg'
import CepilloParaBarrer from '../../assets/productos/cepillo_para_barrer.svg'
import Contenedor120 from '../../assets/productos/contenedor_120.svg'
import Escobillon from '../../assets/productos/escobillon.svg'
import GuantesParaLimpieza from '../../assets/productos/guantes_para_limpieza.svg'
import ChuponDeGoma from '../../assets/productos/chupon_de_goma.svg'
import Haragan from '../../assets/productos/haragan.svg'
import PalasPlasticas from '../../assets/productos/palas_plasticas.webp'
import AceiteVatel from '../../assets/productos/aceite_vatel.webp'
import ArrozMary from '../../assets/productos/arroz_mary.webp'
import AzucarMontalban from '../../assets/productos/azucar_montalban.webp'
import HarinaPan from '../../assets/productos/harina_pan.webp'
import JabonEnPolvo from '../../assets/productos/jabon_en_polvo.webp'
import LecheLaPastoreña from '../../assets/productos/leche_la_pastoreña.webp'
import PastaMary from '../../assets/productos/pasta_mary.webp'
import SalRefinada from '../../assets/productos/sal_refinada.webp'
import HojasOficio from '../../assets/productos/hojas_oficio.webp'
import Pitillos from '../../assets/productos/pitillos.webp'
import ServilletasZ from '../../assets/productos/servilletas_z.webp'
import ToallasEnEspiral from '../../assets/productos/toallas_en_espiral.webp'
import ToallasEnRollo from '../../assets/productos/toallas_en_rollo.webp'
import ToboMopeador from '../../assets/productos/tobo_mopeador.webp'
import VasosConicos from '../../assets/productos/vasos_conicos.webp'
import VasosPlasticos from '../../assets/productos/vasos_plasticos.webp'
import AlcoholMedicinal from '../../assets/productos/alcohol_medicinal.webp'
import BandejasDeAnime from '../../assets/productos/bandejas_de_anime.webp'
import Bolsa40K from '../../assets/productos/bolsa_40k.webp'
import Bolsa40K14 from '../../assets/productos/bolsa_40k_14.webp'
import BolsaBoutique from '../../assets/productos/bolsa_boutique.webp'
import BolsaDePapel from '../../assets/productos/bolsa_de_papel.webp'
import BolsaTipoCamiseta from '../../assets/productos/bolsa_tipo_camiseta.webp'
import ColetoDeRayas from '../../assets/productos/coleto_de_rayas.webp'
import DetergenteEnPolvo10k from '../../assets/productos/detergente_en_polvo_10k.webp'
import Envoplast from '../../assets/productos/envoplast.webp'
import HojasCarta from '../../assets/productos/hojas_carta.webp'
import ToallasIndustriales from '../../assets/productos/toallas_industriales.webp'
import TapabocasDesechables from '../../assets/productos/tapabocas_desechables.webp'
import PapelHigienico from '../../assets/productos/papel_higienico.webp'
import PapelHigienicoInstitucional from '../../assets/productos/papel_higienico_institucional.webp'
import BolsaASA from '../../assets/productos/bolsa_ASA.webp'
import BolsaDesechosOrganicos from '../../assets/productos/bolsa_desechos_organicos.webp'

import LimpiezaPro from '../../assets/productos_limpieza.webp'
import PapeleriaPro from '../../assets/papeleria.webp'
import InstitucionalPro from '../../assets/papel_institucional.webp'
import BolsasPro from '../../assets/bolsas.webp'
import Viveres from '../../assets/viveres_vzla.webp'

const products = [
    {
        id:1, 
        product:'Blanqueador tapa roja 3.7L', 
        category:'cleaning_products', 
        images:[BlanqueadoTapaRoja], 
        description:''
    },
    {
        id:2, 
        product:'Desengrasante multisuperficie 3,7L', 
        category:'cleaning_products', 
        images:[], 
        description:''
    },
    {
        id:3, 
        product:'Jabón líquido 3,7L', 
        category:'cleaning_products', 
        images:[], 
        description:''
    },
    {
        id:4, 
        product:'Limpiador poceta ciclón 1L', 
        category:'cleaning_products', 
        images:[LimpiadorPocetaCiclon], 
        description:''
    },
    {
        id:5, 
        product:'Jabón antibacterial 3,7L', 
        category:'cleaning_products', 
        images:[JabonAntibacterial], 
        description:''
    },
    {
        id:6, 
        product:'Antibacterial 3,7L', 
        category:'cleaning_products', 
        images:[Antibacterial], 
        description:''
    },
    {
        id:7, 
        product:'Ambientador', 
        category:'cleaning_products', 
        images:[Ambientador], 
        description:''
    },
    {
        id:8, 
        product:'Limpiador aerosol', 
        category:'cleaning_products', 
        images:[LimpiadorAerosolPremio], 
        description:''
    },
    {
        id:9, 
        product:'Limpiador aerosol Pride 360cc', 
        category:'cleaning_products', 
        images:[LimpiadorAerosol], 
        description:''
    },
    {
        id:10, 
        product:'Cepillo de mano tipo plancha', 
        category:'cleaning_products', 
        images:[CepilloTipoPlancha], 
        description:''
    },
    {
        id:11, 
        product:'Mopa para limpiar', 
        category:'cleaning_products', 
        images:[Mopa], 
        description:''
    },
    {
        id:12, 
        product:'Cepillo para barrer', 
        category:'cleaning_products', 
        images:[CepilloParaBarrer], 
        description:''
    },
    {
        id:13, 
        product:'Contenedor de basura 120L', 
        category:'cleaning_products', 
        images:[Contenedor120], 
        description:''
    },
    // {
    //     id:14, 
    //     product:'Contenedor de basura 120L', 
    //     category:'cleaning_products', 
    //     images:[], 
    //     description:''
    // },
    {
        id:15, 
        product:'Escobillón', 
        category:'cleaning_products', 
        images:[Escobillon], 
        description:''
    },
    {
        id:16, 
        product:'Guantes para limpieza', 
        category:'cleaning_products', 
        images:[GuantesParaLimpieza], 
        description:''
    },
    {
        id:17, 
        product:'Chupon de goma', 
        category:'cleaning_products', 
        images:[ChuponDeGoma], 
        description:''
    },
    {
        id:18, 
        product:'Haragan', 
        category:'cleaning_products', 
        images:[Haragan], 
        description:''
    },
    {
        id:19, 
        product:'Palas plásticas', 
        category:'cleaning_products', 
        images:[PalasPlasticas], 
        description:''
    },
    {
        id:20, 
        product:'Leche completa 12x1L', 
        category:'food', 
        images:[LecheLaPastoreña], 
        description:''
    },
    {
        id:21, 
        product:'Azúcar montalban 20x1K', 
        category:'food', 
        images:[AzucarMontalban], 
        description:''
    },
    {
        id:22, 
        product:'Aceite vatel 12x1L', 
        category:'food', 
        images:[AceiteVatel], 
        description:''
    },
    {
        id:23, 
        product:'Jabón en polvo 12x1K', 
        category:'cleaning_products', 
        images:[JabonEnPolvo], 
        description:''
    },
    {
        id:24, 
        product:'Sal refinada 25x1K', 
        category:'food', 
        images:[SalRefinada], 
        description:''
    },
    {
        id:25, 
        product:'Harina PAN 20x1K', 
        category:'food', 
        images:[HarinaPan], 
        description:''
    },
    {
        id:26, 
        product:'Arroz 24x1K', 
        category:'food', 
        images:[ArrozMary], 
        description:''
    },
    {
        id:27, 
        product:'Pasta 12x1K', 
        category:'food', 
        images:[PastaMary], 
        description:''
    },
    {
        id:28, 
        product:'Bolsa boutique', 
        category:'plastic_bags', 
        images:[BolsaBoutique], 
        description:''
    },
    {
        id:29, 
        product:'Bolsa de desechos orgánicos', 
        category:'plastic_bags', 
        images:[BolsaDesechosOrganicos], 
        description:''
    },
    {
        id:30, 
        product:'Bolsa de papel', 
        category:'plastic_bags', 
        images:[BolsaDePapel], 
        description:''
    },
    {
        id:31, 
        product:'Bolsa 40K calibre 12', 
        category:'plastic_bags', 
        images:[Bolsa40K], 
        description:''
    },
    {
        id:32, 
        product:'Bolsa 40K calibre 14', 
        category:'plastic_bags', 
        images:[Bolsa40K14], 
        description:''
    },
    {
        id:33, 
        product:'Bolsa tipo camiseta 3K', 
        category:'plastic_bags', 
        images:[BolsaTipoCamiseta], 
        description:''
    },
    {
        id:34, 
        product:'Bolsa tipo ASA', 
        category:'plastic_bags', 
        images:[BolsaASA], 
        description:''
    },
    {
        id:35, 
        product:'Alcohol medicinal', 
        category:'cleaning_products', 
        images:[AlcoholMedicinal], 
        description:''
    },
    {
        id:36, 
        product:'Tapabocas desechables', 
        category:'various_products', 
        images:[TapabocasDesechables], 
        description:''
    },
    {
        id:37, 
        product:'Envoplast', 
        category:'institutional_products', 
        images:[Envoplast], 
        description:''
    },
    {
        id:38, 
        product:'Papel higiénico institucional', 
        category:'institutional_products', 
        images:[PapelHigienicoInstitucional], 
        description:''
    },
    {
        id:39, 
        product:'Toallas industriales', 
        category:'institutional_products', 
        images:[ToallasEnEspiral], 
        description:''
    },
    {
        id:40, 
        product:'Vasos cónicos Konie', 
        category:'institutional_products', 
        images:[VasosConicos], 
        description:''
    },
    {
        id:41, 
        product:'Bandejas de anime', 
        category:'institutional_products', 
        images:[BandejasDeAnime], 
        description:''
    },
    {
        id:42, 
        product:'Vasos plásticos', 
        category:'institutional_products', 
        images:[VasosPlasticos], 
        description:''
    },
    {
        id:43, 
        product:'Tobo mopeador', 
        category:'cleaning_products', 
        images:[ToboMopeador], 
        description:''
    },
    {
        id:44, 
        product:'Toallas en rollo', 
        category:'institutional_products', 
        images:[ToallasEnRollo], 
        description:''
    },
    {
        id:45, 
        product:'Toallas en espiral', 
        category:'institutional_products', 
        images:[ToallasEnEspiral], 
        description:''
    },
    {
        id:46, 
        product:'Servilletas Z', 
        category:'institutional_products', 
        images:[ServilletasZ], 
        description:''
    },
    {
        id:47, 
        product:'Resma de hojas carta', 
        category:'office_products', 
        images:[HojasCarta], 
        description:''
    },
    {
        id:48, 
        product:'Resma de hojas oficio', 
        category:'office_products', 
        images:[HojasOficio], 
        description:''
    },
    {
        id:49, 
        product:'Detergente en polvo 10K y 20K', 
        category:'cleaning_products', 
        images:[DetergenteEnPolvo10k], 
        description:''
    },
    {
        id:50, 
        product:'Pitillos', 
        category:'institutional_products', 
        images:[Pitillos], 
        description:''
    },
    {
        id:51, 
        product:'Coleto 3 rayas', 
        category:'cleaning_products', 
        images:[ColetoDeRayas], 
        description:''
    },
    {
        id:52, 
        product:'Papel higiénico', 
        category:'institutional_products', 
        images:[PapelHigienico], 
        description:''
    },
]

const ourProducts = [
    {
      productTitle: 'Productos de limpieza',
      productText:'',
      action:'cleaning_products',
      images: LimpiezaPro
    },
    {
      productTitle: 'Bolsas plásticas',
      productText:'',
      action:'plastic_bags',
      images: BolsasPro
    },
    {
      productTitle: 'Papel institucional',
      productText:'',
      action:'institutional_products',
      images: InstitucionalPro
    },
    {
      productTitle: 'Papelería en general',
      productText:'',
      action:'office_products',
      images: PapeleriaPro
    },
    {
      productTitle: 'Víveres en general',
      productText:'',
      action:'food',
      images: Viveres
    },
  ]
const AllProducts = () => {
    return products
}
const filterProducts = (parameter) => {
    const reqProducts = products.filter((product)=>(product.category === parameter))
    return reqProducts
}

const filterProductsName = (parameter) => {
    const reqProducts = products.filter((product)=>(product.product.toLowerCase().includes(parameter.toLowerCase())))
    return reqProducts
}

const productsServices = () => {
    return ourProducts
}

export default {
    AllProducts,
    productsServices,
    filterProducts,
    filterProductsName
  }
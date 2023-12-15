import { Injectable } from '@angular/core';
import { product } from './shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {







  constructor() { }

  getAll(): product[]{
    return [
    {
        type: 'foundation',
        goesWith: ['Fair', 'Warm'],
        imageUrl: 'https://www.sephora.com/productimages/sku/s1925163-main-zoom.jpg?imwidth=630',
        name: 'Fenty Beauty Filtr Soft Matte Longwear Liquid Foundation',
        color: '140',
        price: '$40.00',
        link:''
    
      },
{
  type: 'foundation',
  goesWith: ['Fair', 'Cool'],
  imageUrl: 'https://www.sephora.com/productimages/sku/s1925197-main-zoom.jpg?imwidth=630',
  name: 'Fenty Beauty Filtr Soft Matte Longwear Liquid Foundation',
  color: '170',
  price: '$40.00',
  link:''

},
{
  type: 'foundation',
  goesWith:['Fair', 'Neutral'],
  imageUrl: 'https://www.sephora.com/productimages/sku/s2590008-main-zoom.jpg?imwidth=630',
  name: 'Fenty Beauty Filtr Soft Matte Longwear Liquid Foundation',
  color: '125',
  price: '$40',
  link:''

},
{
type: 'foundation',
goesWith: ['Medium', 'Warm'],
imageUrl: 'https://www.sephora.com/productimages/sku/s2164630-main-zoom.jpg?imwidth=630',
name: 'Fenty Beauty Filtr Soft Matte Longwear Liquid Foundation',
color: '235',
price: '$40',
link:''

},
{
type: 'foundation',
goesWith: ['Medium', 'Cool'],
imageUrl: 'https://www.sephora.com/productimages/sku/s2361335-main-zoom.jpg?imwidth=630',
name: 'Rare Beauty LiquidTouch Weightless Foundation',
color: '300C',
price: '$30.00',
link:''

},
{
type: 'foundation',
goesWith:['Medium', 'Neutral'],
imageUrl: 'https://www.sephora.com/productimages/sku/s2361301-main-zoom.jpg?imwidth=630',
name: 'Liquid Touch Weightless Foundation',
color: '270 N',
price: '$30.00',
link:''

},

  {
    type: 'foundation',
    goesWith: ['Dark', 'Warm'],
    imageUrl: 'https://www.sephora.com/productimages/sku/s2361558-main-zoom.jpg?imwidth=630',
    name: 'Liquid Touch Weightless Foundation',
    color: '520W',
    price: '$30.00',
    link:''
    
    },
    {
    type: 'foundation',
    goesWith: ['Dark', 'Cool'],
    imageUrl: 'https://www.sephora.com/productimages/sku/s2361582-main-zoom.jpg?imwidth=630',
    name: 'Liquid Touch Weightless Foundation',
    color: '550C',
    price: '30.00',
    link:''
    
    },
    {
    type: 'foundation',
    goesWith:['Dark', 'Neutral'],
    imageUrl: 'https://www.sephora.com/productimages/sku/s1359744-main-zoom.jpg?imwidth=630',
    name: 'Armani Beauty Luminous Silk Perfect Glow Falwless Oil-Free Foundation',
    color: '13',
    price: '$69.00',
    link:''
    
    },
       {
        type: 'concealer',
        goesWith: [ 'Fair', 'Cool'],
        imageUrl: 'https://www.sephora.com/productimages/sku/s1847102-main-zoom.jpg?imwidth=630',
        name: 'Nars Radiant Creamy Concealer',
        color: 'Creme Brulee- L2.5',
        price: '$32.00',
        link:''
      },

      {
     
      type: 'concealer',
      goesWith: ['Medium', 'Cool'],
      imageUrl: 'https://www.sephora.com/productimages/sku/s2361806-main-zoom.jpg?imwidth=3000',
      name: 'Nars Radinat Creamy Concealer',
      color: 'Toffee- M1.25',
      price: '$32.00',
      link:''
    },
    {
       
      type: 'concealer',
      goesWith:[ 'Dark', 'Cool'],
      imageUrl: 'https://www.sephora.com/productimages/sku/s1935154-main-zoom.jpg?imwidth=630',
      name: 'Nars Radiant Creamy Concealer',
      color: 'Hazelnut - MD4',
      price: '32.00',
      link:''
    },
    {
      type: 'concealer',
      goesWith:[ 'Fair', 'Warm'],
      imageUrl: 'https://www.sephora.com/productimages/sku/s1847110-main-zoom.jpg?imwidth=630',
      name: 'Nars Radiant Creamy Concealer',
      color: 'Cannelle- L2.75',
      price: '32.00',
      link:''
    },
    {
      type: 'concealer',
      goesWith:[ 'Medium', 'Warm'],
      imageUrl: 'https://www.sephora.com/productimages/sku/s1847128-main-zoom.jpg?imwidth=630',
      name: 'Nars Radiant Creamy Concealer',
      color: 'Macadadamia - M1.5',
      price: '',
      link:''
    },
    {
      type: 'concealer',
      goesWith: [ 'Dark', 'Warm'],
      imageUrl: 'https://www.sephora.com/productimages/sku/s1478445-main-zoom.jpg?imwidth=630',
      name: 'Nars Radinat Creamy Concealer',
      color: 'Cacao- D2',
      price: '$32.00',
      link:''
    },
    {
      type: 'concealer',
      goesWith: [ 'Fair', 'Neutral'],
      imageUrl: 'https://www.sephora.com/productimages/sku/s2172310-main-zoom.jpg?imwidth=630',
      name: ' Nars Radiant Creamy Concealer',
      color: 'Madeleine- L2.3',
      price: '$32.00',
      link:''
    },
    {
      type: 'concealer',
      goesWith: [ 'Medium', 'Neutral'],
      imageUrl: 'https://www.sephora.com/productimages/sku/s1478387-main-zoom.jpg?imwidth=630',
      name: ' Nars Radiant Creamy Concealer',
      color: 'Custard- M1',
      price: '$32.00',
      link:''
    },
    {
      type: 'concealer',
      goesWith: [ 'Dark', 'Neutral'],
      imageUrl: 'https://www.sephora.com/productimages/sku/s1847169-main-zoom.jpg?imwidth=630',
      name: 'Nars Radiant Creamy Concealer',
      color: 'Dark Cofee- d3',
      price: '',
      link:''
    },

{

    type: 'blush',
    goesWith: ['Fair'],
    imageUrl: 'https://www.sephora.com/productimages/sku/s2642486-main-zoom.jpg?imwidth=3000',
    name: 'Too Faced Cloud Crush Blurring Blush',
    color: 'Candy Clouds- cool soft pink',
    price: '$29.00',
    link: 'https://www.sephora.com/product/too-faced-cloud-crush-blurring-blush-P504072?skuId=2642486&icid2=products%20grid:p504072:product'

},
{
  type: 'blush',
  goesWith: ['Medium'],
  imageUrl: 'https://www.sephora.com/productimages/sku/s2296986-main-zoom.jpg?imwidth=630',
  name: 'Nars Blush',
  color: 'Orgasm X',
  price: '$32.00',
  link: ''
},
{
type: 'blush',
goesWith: ['Dark'],
imageUrl: 'https://www.sephora.com/productimages/sku/s2297026-main-zoom.jpg?imwidth=630',
name: 'Nars Blush',
color: 'Dominate',
price: '$32.00',
link: ''
},

{
  type: 'bronzer',
  goesWith: ['Fair'],
  imageUrl: 'https://www.sephora.com/productimages/sku/s2520427-main-zoom.jpg?imwidth=630',
  name: 'Benefit Cosmetics Hoola Bronzer',
  color: 'Hoola Lite Bronzer',
  price: '$35.00',
  link: ''
},

{
  type: 'bronzer',
  goesWith: ['Medium'],
  imageUrl: 'https://www.sephora.com/productimages/sku/s2520435-main-zoom.jpg?imwidth=630',
  name: 'Benefit Cosmetics Hoola Bronzer',
  color: 'Hoola Caramel Bronzer',
  price: '$35.00',
  link: ''
},
{
  type: 'bronzer',
  goesWith: ['Dark'],
  imageUrl: 'https://www.sephora.com/productimages/sku/s2520443-main-zoom.jpg?imwidth=630',
  name: 'Benefit Cosmetics Hoola Bronzer',
  color: 'Hoola Toasted Bronzer',
  price: '$35.00',
  link: ''
},
{
  type: 'highlighter',
  goesWith: ['Fair'],
  imageUrl: 'https://www.sephora.com/productimages/sku/s2362168-main-zoom.jpg?imwidth=630',
  name: 'Rare Beauty Positive Light Liquid Luminizer Highlight',
  color: 'Mesmerize',
  price: '$25.00',
  link: ''
},

{
  type: 'highlighter',
  goesWith: ['Medium'],
  imageUrl: 'https://www.sephora.com/productimages/sku/s2362192-main-zoom.jpg?imwidth=630',
  name: 'Positive Light Liquid Luminizer Highlight',
  color: 'Flaunt',
  price: '$25.00',
  link: ''
},
{
  type: 'highlighter',
  goesWith: ['Dark'],
  imageUrl: 'https://www.sephora.com/productimages/sku/s2362218-main-zoom.jpg?imwidth=630',
  name: 'Positive Light Liquid Luminizer Highlight',
  color: 'Reflect',
  price: '25.00',
  link: ''
},
{
  type: 'eyeshadow',
  goesWith: ['Blue'],
  imageUrl: 'https://www.sephora.com/productimages/sku/s2478592-main-zoom.jpg?imwidth=630',
  name: 'tarte eyeshadow',
  color: 'Tartelette Juicy Amazonian Clay Eyeshadow Palette',
  price: '$45.00',
  link: ''
},
{
  type: 'eyeshadow',
  goesWith: ['Brown'],
  imageUrl: 'https://www.sephora.com/productimages/sku/s2580017-main-zoom.jpg?imwidth=630',
  name: 'Melt Cosmetics',
  color: 'Gemini Eyeshdaow Palette 1',
  price: '$58.00',
  link: ''
},

{
  type: 'eyeshadow',
  goesWith: ['Green'],
  imageUrl: 'https://www.sephora.com/productimages/sku/s2486694-main-zoom.jpg?imwidth=630',
  name: 'Natasha Devona',
  color: 'Retro Eyeshadow Palette',
  price: '69.00',
  link: ''
},

{
  type: 'eyeshadow',
  goesWith: ['Hazel'],
  imageUrl: 'https://www.sephora.com/productimages/sku/s2716777-main-zoom.jpg?imwidth=630',
  name: 'Anastasia Beverly Hills',
  color: 'Mini Sultry Eyeshadow Palette',
  price: '29.00',
  link: ''
},

{
  type: 'eyeliner',
  goesWith: ['eyeliner'],
  imageUrl: 'https://www.sephora.com/productimages/sku/s2689313-main-zoom.jpg?imwidth=630',
  name: 'Rare Beuty Pefect Strokes Longewear & Waterproof Gel Eyeliner',
  color: 'True Black',
  price: '19.00',
  link: ''
},
{
type: 'mascara',
goesWith: ['Short lashes'],
imageUrl: 'https://www.sephora.com/productimages/sku/s2335198-main-zoom.jpg?imwidth=630',
name: 'Limitless Lash Lengthening Clean Mascara',
color: 'After Midnight',
price: '28.00',
link: ''
},
{
  type: 'mascara',
  goesWith: ['Straight lashes'],
  imageUrl:'https://www.sephora.com/productimages/sku/s1665082-main-zoom.jpg?imwidth=3000',
  name: 'Benefit Cosmetics Lash Curling & Lifting Mascara',
  color: 'Black',
  price: '28.00',
  link: ''
},

{
  type: 'mascara',
  goesWith: ['Sparse lashes'],
  imageUrl:'https://www.sephora.com/productimages/sku/s2658862-main-zoom.jpg?imwidth=630',
  name: 'Fan Fest Fanning & Volumizing Mascara',
  color: 'Hyper Black',
  price: '$28.00',
  link: ''
},
{
  type: 'lipstick',
  goesWith: ['Cool'],
  imageUrl:'https://www.sephora.com/productimages/sku/s2519189-main-zoom.jpg?imwidth=630',
  name: 'Anastaia Beverly Hills Matte & Satin Velvet Lipstick',
  color: 'Royal Red',
  price: '23.00',
  link: ''
},
{
  type: 'lipstick',
  goesWith: ['Warm'],
  imageUrl:'https://www.sephora.com/productimages/sku/s2519254-main-zoom.jpg?imwidth=630',
  name: 'Anastaia Beverly Hills Matte & Satin Velvet Lipstick',
  color: 'Peach Amber',
  price: '$23.00',
  link: ''
},
{
  type: 'lipstick',
  goesWith: ['Neutral'],
  imageUrl:'https://www.sephora.com/productimages/sku/s2519379-main-zoom.jpg?imwidth=630',
  name: 'Anastaia Beverly Hills Matte & Satin Velvet Lipstick',
  color: 'Praline',
  price: '$23.00',
  link: ''
},

{
  type: 'lipgloss',
  goesWith: ['Cool'],
  imageUrl:'https://www.sephora.com/productimages/sku/s2652121-main-zoom.jpg?imwidth=630',
  name: 'Summer Fridays Lip Butter Balm for Hydration & Shine',
  color: 'Cherry',
  price: '$24.00',
  link: ''
},
{
  type: 'lipgloss',
  goesWith: ['Warm'],
  imageUrl:'https://www.sephora.com/productimages/sku/s2590560-main-zoom.jpg?imwidth=630',
  name: 'Summer Fridays Lip Butter Balm for Hydration & Shine',
  color: 'Poppy',
  price: '$24.00',
  link: ''
},
{
  type: 'lipgloss',
  goesWith: ['Neutral'],
  imageUrl:'https://www.sephora.com/productimages/sku/s2590578-main-zoom.jpg?imwidth=630',
  name: 'Summer Fridays Lip Butter Balm for Hydration & Shine',
  color: 'Brown Sugar',
  price: '$24.00',
  link: ''
},

    ]

    }


}

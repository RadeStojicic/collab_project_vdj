<template>
    <div class="hero_div">
        <div class="container"> 
            <div class="div1">
                <h1 class="main-text"><span style="color:#DE003C">25%</span> NA SVE <br><span style="font-size: 2.5rem">PROIZVODE </span></h1>
            </div>
            <div class="div2">
                    <splide :options="options" >
                        <splide-slide class="slideContainer" v-for="slide in slides" :key="slide">
                          
                            <img class="slideImg" src="./whey.png" alt="slide.alt">
                            <h1>{{slide}}</h1>
                            <star-rating  class="star" v-bind:increment="0.5"
                            :max-rating="5"
                            active-color="#FFEE00"
                            :show-rating="true"
                            :rating=5
                            :star-size="30"
                            >
                            </star-rating>



                        </splide-slide>
                    </splide>

            </div>
        </div>
    </div>
</template>



<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import StarRating from 'vue-star-rating'
import '@splidejs/splide/dist/css/themes/splide-default.min.css';


export default {
    components: {
    Splide,
    SplideSlide,
    StarRating
  },
  data() {
      return {
         options: {
            pagination: false,
            width:500
        },
        slides: [
            '1500 RSD',
            '1699 RSD',
            '2190 RSD'
        ],
        rating: [
            4.5,
            5,
            2
        ]
      }
  },
  methods: {
      setRating(rating) {
          this.rating = rating
      }
  }
}
</script>

<style scoped>
.hero_div {
    height: auto;
    background-image: linear-gradient(rgba(0, 0, 0, 0.685), rgba(0, 0, 0, 0.76)), url("./hero_image.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-bottom: 100px;


}
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
.div1 {
    text-align: center;
    margin-top: 5em;
}
.div1 h1 {
    font-size: 3.5rem;
}
.main-text {
    color:white;

}
.div2 {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.slideContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
}
.slideContainer h1 {
    color:#DE003C
}
.slideImg {
    width: 50%;
    margin: auto;
}
.star {
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 10px;
    color: white;
}

@media(min-width: 1920px) {
    .hero_div {
        margin: auto;
        padding-top: 100px;   
    }
}

</style>
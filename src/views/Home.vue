<template>
<div id="home">
     <h1>...</h1>  

  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="Nueva exposición: BandW"
        text="Conoce a los artistas que componen la nueva exposición de Enero."
        img-src="https://i.imgur.com/JvYJTxo.jpg"
      ></b-carousel-slide>

       <b-carousel-slide
        caption="Nuevas instalaciones"
        text="Abrimos una nueva sala adaptada para proyectos sonoros."
        img-src="https://i.imgur.com/ExW1bYu.jpg"
      ></b-carousel-slide>

        <b-carousel-slide
        caption="Majestuosidad"
        text="Obras galardonadas de 2020."
        img-src="https://i.imgur.com/vU1geVT.jpg"
      ></b-carousel-slide>

        <b-carousel-slide
        caption="Fotografía"
        text="Objetos cotidianos con un tinte desgarrador."
        img-src="https://i.imgur.com/hGSjiW2.jpg"
      ></b-carousel-slide>

        <b-carousel-slide
        caption="Retratos expresivos"
        text="Galería de retratos digitales."
        img-src="https://i.imgur.com/cPn0emz.jpg"
      ></b-carousel-slide>

    </b-carousel>

    <p class="mt-4">
      El <strong>arte</strong> ha sido una de las últimas industrias creativas en dar el salto al mundo digital.
    </p>
  </div>

    <div>
    <b-card-group deck>
      <b-card img-src="https://i.imgur.com/JvYJTxo.jpg" img-alt="Card image" img-top>
        <b-card-text>
          Creemos en todos los artistas de nuestra galería, ofreciéndoles todos nuestros servicios para que su obra no pase desapercibida. Primamos la visibilidad para todos nuestros clientes.
        </b-card-text>
      </b-card>

      <b-card img-src="https://i.imgur.com/McIEVx4.jpg" img-alt="Card image" img-bottom>
        <b-card-text>
         Afianzamos la conexión con nuevos talentos en el mundo del arte. Haciendo nuestra galería algo con lo que pueden expresarse y dejar huella. Mirar en la categoría servicios para más información.
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
 </div>
</template>

<script>
</script>
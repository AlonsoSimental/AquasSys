<template>
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">

    <!--Inicio Div para el navbar-->
    <div> 
        <v-toolbar height=100 color="#FFFFFF">

            <v-btn height=85>
                <v-img :width="75" aspect-ratio="1/1" cover src="https://i.ibb.co/k5YB7hJ/logo2.png"></v-img>
            </v-btn>

            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>

            <v-btn variant="text">
                Contratos
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn variant="text">
                Servicios
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn variant="text">
                Pago en línea
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn variant="text">
                Descuentos
            </v-btn>

            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon center size=35px icon="mdi-account-circle" />
            </v-btn>
        </v-toolbar>
    </div>
    <!--Fin Div para el navbar-->

    <!--Inicio Div para el Carousel-->
    <div>
        <v-carousel show-arrows="hover">
            <v-carousel-item src="https://i.ibb.co/fQBmyfW/banner1.jpg" cover></v-carousel-item>

            <v-carousel-item src="https://i.ibb.co/9cjRDMz/banner2.jpg" cover></v-carousel-item>

            <v-carousel-item src="https://i.ibb.co/Qbp3ySb/banner3.jpg" cover></v-carousel-item>
        </v-carousel>
    </div>
    <!--Fin Div para el Carousel-->

</template>
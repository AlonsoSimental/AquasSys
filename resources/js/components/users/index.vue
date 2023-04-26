<template>

<link href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" rel="stylesheet">

    <div>
        <v-toolbar height=100 color="#FFFFFF">

            <v-btn height=85>
                <v-img 
                :width="75"
                aspect-ratio="1/1"
                cover
                src="https://i.ibb.co/k5YB7hJ/logo2.png"></v-img>
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
                <v-icon center size=35px icon="fas fa-user-circle" />
            </v-btn>
        </v-toolbar>
    </div>
</template>
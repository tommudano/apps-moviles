import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import styles from "../styles/FaqsScreenStyles";

export default function FaqsScreen({ navigation }) {
    return (
        <View style={styles.baseBackground}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.titulo}>Home Screen</Text>
                    <Text style={styles.texto}>
                        En la pagina de HOME se utilizó una FlatList que
                        contiene todas las CharacterCard con una información
                        incial sobre los personajes, traída desde la API de
                        Rick&Morty.
                    </Text>
                    <Text style={styles.texto}>
                        Para acceder a más información sobre el pesonaje se debe
                        apretar la card y se despliega un CharacterModal
                        mostrando mas datos sobre el personaje.
                    </Text>
                    <Text style={styles.texto}>
                        Si se quiere agregar un personaje a Favoritos, se debe
                        presionar el botón con forma de corazón, lo que
                        desparará una animación, sacándolo de la FlatList, y a
                        la vez agregará a este personaje a la tabla de Favoritos
                        en Firebase. Luego se podrá ver la Card de este
                        personaje en la página de Favoritos.
                    </Text>
                    <Text style={styles.texto}>
                        En la parte superior tenemos la parte de filtros, donde
                        se puede hacer por Nombre, Especie, Tipo, Genero y/o
                        Estado, y al aplicarlos se mostrará la FlatList con los
                        personajes que cumplan con las características
                        seleccionadas en los filtros. Esto se logra también
                        consultando la API de Rick&Morty, con los filtros
                        correspondientes.
                    </Text>
                    <Text style={styles.subtitulo}>Favorites Screen</Text>
                    <Text style={styles.texto}>
                        En la pantalla de Favoritos podemos ver aquellas Cards
                        de los personajes a los que hayamos agregado a
                        Favoritos.
                    </Text>
                    <Text style={styles.texto}>
                        Para eliminarlas de esta página se debe presionar el
                        botón con forma de corazón, lo que disparará una
                        animación y borrará este personaje de la tabla de
                        Firebase.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

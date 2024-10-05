import React from "react";
// Importa o provedor do NativeBase
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";
//import AdicionarTarefa from "./src/components/AdicionarTarefas"; // Ajuste o caminho conforme necessário
//import ListaTarefas from "./src/components/ListaTarefas"; // Ajuste o caminho conforme necessário

export default function App() {
  // Retorna a estrutura da tela principal
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AppNavigator />  {/* Adicione o navegador aqui */}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

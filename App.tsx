import React from "react";
// Importa o provedor do NativeBase
import { NativeBaseProvider } from "native-base";
// Importa o provedor de estado global
import { ProvedorEstadoGlobal } from "./src/hooks/EstadoGlobal"; // Ajuste o caminho conforme necessário
// Importa o componente de navegação
import AppNavigator from "./src/navigation/AppNavigator";
//import AdicionarTarefa from "./src/components/AdicionarTarefas"; // Ajuste o caminho conforme necessário
//import ListaTarefas from "./src/components/ListaTarefas"; // Ajuste o caminho conforme necessário

export default function App() {
  // Retorna a estrutura da tela principal
  return (
    // Envolve a aplicação no provedor de estado global e NativeBase
    <NativeBaseProvider>
      <ProvedorEstadoGlobal>
        <AppNavigator />  {/* Adicione o navegador aqui */}
      </ProvedorEstadoGlobal>
    </NativeBaseProvider>
  );
}

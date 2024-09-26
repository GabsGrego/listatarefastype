import React from "react";
import { NativeBaseProvider } from "native-base";
import { ProvedorEstadoGlobal } from "./src/hooks/EstadoGlobal"; // Ajuste o caminho conforme necessário
import AdicionarTarefa from "./src/components/AdicionarTarefas"; // Ajuste o caminho conforme necessário
import ListaTarefas from "./src/components/ListaTarefas"; // Ajuste o caminho conforme necessário

const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <ProvedorEstadoGlobal>
        <AdicionarTarefa />
        <ListaTarefas />
      </ProvedorEstadoGlobal>
    </NativeBaseProvider>
  );
};

export default App;
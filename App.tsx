// Importa o provedor de estado global
import { ProvedorEstadoGlobal } from "./src/hooks/EstadoGlobal";
// Importa o componente ListaTarefas
import { NativeBaseProvider, View } from "native-base";
import AdicionarTarefa from "./src/components/AdicionarTarefas";
import ListaTarefas from "./src/components/ListaTarefas";

export default function App() {
  // Retorna a estrutura da tela principal

  return (
    // Envolve a aplicação no provedor de estado global
    <NativeBaseProvider>
      <ProvedorEstadoGlobal>
        <View style={{ flex: 1 }}>
          {/* Componente para adicionar tarefas */}
          <AdicionarTarefa />
          {/* Componente que lista as tarefas */}
          <ListaTarefas />
        </View>
      </ProvedorEstadoGlobal>
    </NativeBaseProvider>
  );
}
import React from 'react'; // Importa a biblioteca React para criar componentes.
import { View } from 'native-base'; // Importa o componente View da biblioteca native-base.
import AdicionarTarefa from '../components/AdicionarTarefas'; // Importa o componente para adicionar tarefas.
import ListaTarefas from '../components/ListaTarefas'; // Importa o componente que exibe a lista de tarefas.

const TarefasScreen: React.FC = () => { // Declara o componente TarefasScreen como um componente funcional.
  return (
    <View style={{ flex: 1, backgroundColor: '#402291' }}> {/* Define o estilo do container principal. */}
      {/* Formulário de Adicionar Tarefa */}
      {/* AdicionarTarefa */} {/* Renderiza o componente que permite adicionar novas tarefas. */}
      {/* Lista de Tarefas */}
      <ListaTarefas /> {/* Renderiza o componente que exibe a lista de tarefas existentes. */}
    </View>
  );
};

export default TarefasScreen; // Exporta o componente para que possa ser utilizado em outras partes da aplicação.
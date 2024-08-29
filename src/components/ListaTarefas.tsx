import React from "react"; 
import { FlatList, Text, Box } from 'native-base'; // Importa componentes do Native Base para estruturar a UI

// Define a interface para as props do componente
interface ListaTarefasProps {
  tarefas: string[]; // Array de strings que representam as tarefas
}

const ListaTarefas: React.FC<ListaTarefasProps> = ({ tarefas }) => {
  return (
    <FlatList
      // 'data' é o array de tarefas que será mapeado para renderizar os itens da lista
      data={tarefas}
      
      // 'renderItem' define como cada item da lista será renderizado
      renderItem={({ item }) => (
        <Box
          bg="gray.200" // Define a cor de fundo do box (um cinza claro)
          p={4} // Define o padding interno do box (distância do conteúdo para as bordas)
          alignItems="flex-start" // Alinha o texto à esquerda dentro do box
          my={2} // Margem vertical (espaço entre itens)
          mx={2} // Margem horizontal (espaço lateral entre itens)
        >
          <Text>{item}</Text> {/* O texto exibido será o conteúdo da tarefa (item) */}
        </Box>
      )}
      
      // 'keyExtractor' define uma chave única para cada item com base no índice da lista
      keyExtractor={(item, index) => index.toString()}
      
      // Estilização para o contêiner da lista
      contentContainerStyle={{ flexGrow: 1 }} // Garante que a lista ocupe todo o espaço disponível
    />
  );
};

export default ListaTarefas; // Exporta o componente para ser usado em outros arquivos
import React from "react";
import { FlatList, Text, Box, Button, Input } from 'native-base';
import { useEstadoGlobal } from "../hooks/EstadoGlobal";

// Interface que define os props do componente TarefaItem
interface TarefaItemProps {
  id: number;
  titulo: string;
}

// Componente "TarefaItem" - Representa um item individual na lista de tarefas
const TarefaItem: React.FC<TarefaItemProps> = ({ id, titulo }) => {
  const { editarTarefa, excluirTarefa } = useEstadoGlobal(); // Obtém as funções do contexto

  const [editando, setEditando] = React.useState(false);
  const [novoTitulo, setNovoTitulo] = React.useState(titulo);

  const handleEditar = () => {
    editarTarefa(id, novoTitulo);
    setEditando(false);
  };

  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      bg="gray.200"
      p={4}
      my={2}
      mx={2}
      borderRadius={8}
    >
      {editando ? (
        <>
          <Input
            value={novoTitulo}
            onChangeText={setNovoTitulo}
            onBlur={handleEditar}
          />
          <Button onPress={handleEditar}>Salvar</Button>
        </>
      ) : (
        <>
          <Text flex={3} fontSize={18}>{titulo}</Text>
          <Button onPress={() => setEditando(true)}>Editar</Button>
          <Button onPress={() => excluirTarefa(id)}>Excluir</Button>
        </>
      )}
    </Box>
  );
};

// Componente "ListaTarefas"
const ListaTarefas: React.FC = () => {
  const { tarefas } = useEstadoGlobal();

  return (
    <FlatList
      data={tarefas}
      renderItem={({ item }) => <TarefaItem id={item.id} titulo={item.titulo} />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ width: '100%', backgroundColor: '#402291' }}
    />
  );
};

export default ListaTarefas;
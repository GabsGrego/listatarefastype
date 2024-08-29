import React, { useState } from "react"; // Importa o React e o hook useState
import { View, Input, IconButton, Text } from 'native-base'; // Importa componentes do Native Base para criar a UI
import { Ionicons } from '@expo/vector-icons'; // Importa ícones da biblioteca Ionicons

// Define a interface para as props do componente
interface AdicionarTarefaProps {
  onAdicionarTarefa: (tarefa: string) => void; // Função que será chamada quando uma nova tarefa for adicionada
}

const AdicionarTarefa: React.FC<AdicionarTarefaProps> = ({ onAdicionarTarefa }) => {
  // Define o estado local 'tarefa' que armazena a tarefa digitada
  const [tarefa, setTarefa] = useState("");

  // Função que adiciona a nova tarefa
  const adicionarTarefa = () => {
    // Verifica se a string da tarefa não está vazia
    if (tarefa.trim() !== "") {
      // Chama a função recebida via props para adicionar a tarefa ao estado global
      onAdicionarTarefa(tarefa);
      // Reseta o campo de texto após adicionar a tarefa
      setTarefa("");
    }
  };

  return (
    <View style={{ backgroundColor: '#402291', paddingVertical: 20, paddingHorizontal: 20, paddingTop: 50 }}>
      {/* Título da lista de tarefas */}
      <Text fontSize="xl" color="white" mb={4}>Lista de Tarefas Hete Caetano</Text>

      {/* Contêiner para o campo de entrada de texto e o botão */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1, marginRight: 10 }}>
          {/* Campo de entrada de texto onde o usuário digita a tarefa */}
          <Input
            placeholder="Digite uma tarefa" // Texto que aparece no campo quando ele está vazio
            placeholderTextColor="white" // Cor do placeholder
            value={tarefa} // O valor do campo de texto é ligado ao estado 'tarefa'
            onChangeText={(texto) => setTarefa(texto)} // Atualiza o estado 'tarefa' conforme o usuário digita
            fontSize={14} // Tamanho da fonte do texto
            color="white" // Cor do texto
          />
        </View>

        {/* Botão com ícone para adicionar a tarefa */}
        <IconButton
          icon={<Ionicons name="add" size={24} color="#402291" />} // Ícone de adição
          colorScheme="light" // Define o esquema de cores
          onPress={adicionarTarefa} // Chama a função 'adicionarTarefa' ao pressionar o botão
          style={{ borderRadius: 50, backgroundColor: 'gold' }} // Estilo para o botão, incluindo a cor de fundo e bordas arredondadas
        />
      </View>
    </View>
  );
};

export default AdicionarTarefa; // Exporta o componente para ser usado em outras partes da aplicação
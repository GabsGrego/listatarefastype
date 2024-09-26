import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage'; // Atualizar para > '@react-native-async-storage/async-storage' nao funcionou

// Interface que define a estrutura de uma tarefa
interface Tarefa {
  id: number;
  titulo: string;
}

// Interface que define o contexto global de estado
interface ContextoEstadoGlobal {
  tarefas: Tarefa[];
  adicionarTarefa: (titulo: string) => Promise<void>; // Função assíncrona
  editarTarefa: (id: number, novoTitulo: string) => Promise<void>; // Função assíncrona
  excluirTarefa: (id: number) => Promise<void>; // Função assíncrona
}


// Cria o contexto global de estado
const ContextoEstadoGlobal = createContext<ContextoEstadoGlobal>({
  tarefas: [],
  adicionarTarefa: async () => {}, // Função assíncrona
  editarTarefa: async () => {}, // Função assíncrona
  excluirTarefa: async () => {}, // Função assíncrona
});

// Hook para acessar o contexto global de estado
export const useEstadoGlobal = () => useContext(ContextoEstadoGlobal);

// Componente que fornece o contexto global de estado para seus filhos
export const ProvedorEstadoGlobal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [isRecarregandoTela, setIsRecarregandoTela] = useState(true);

  // Função para adicionar uma nova tarefa
  const adicionarTarefa = async (titulo: string) => {
    const novaTarefa: Tarefa = {
      id: Date.now(),
      titulo,
    };

    // Atualiza o estado das tarefas com a nova tarefa
    setTarefas(prevTarefas => [...prevTarefas, novaTarefa]);

    // Envia a nova tarefa para o backend
    await salvarTarefaNoBackend(novaTarefa);
    await salvarTarefas([...tarefas, novaTarefa]); // Salva no AsyncStorage
  };

  // Função para editar o título de uma tarefa
  const editarTarefa = async (id: number, novoTitulo: string) => {
    const novasTarefas = tarefas.map(tarefa =>
      tarefa.id === id ? { ...tarefa, titulo: novoTitulo } : tarefa
    );

    setTarefas(novasTarefas);

    // Atualiza a tarefa no backend
    await atualizarTarefaNoBackend(id, novoTitulo);
    await salvarTarefas(novasTarefas);
  };

  // Função para excluir uma tarefa
  const excluirTarefa = async (id: number) => {
    const novasTarefas = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(novasTarefas);

    // Exclui a tarefa no backend
    await excluirTarefaNoBackend(id);
    await salvarTarefas(novasTarefas);
  };

  // Carrega as tarefas do AsyncStorage na inicialização
  useEffect(() => {
    const carregarTarefas = async () => {
      try {
        const tarefasArmazenadas = await AsyncStorage.getItem('tarefas');
        if (tarefasArmazenadas) {
          setTarefas(JSON.parse(tarefasArmazenadas));
        }
      } catch (error) {
        console.error(error);
      }
      setIsRecarregandoTela(false); // Define a tela como carregada
    };
    carregarTarefas();
  }, []);

  // Função para salvar uma nova tarefa no backend
  const salvarTarefaNoBackend = async (novaTarefa: Tarefa) => {
    try {
      const token = await AsyncStorage.getItem('token'); // Obter token do AsyncStorage
      await fetch('http://localhost:3000/api/tarefas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(novaTarefa),
      });
    } catch (error) {
      console.error('Erro ao salvar tarefa no backend:', error);
    }
  };

  // Função para atualizar uma tarefa no backend
  const atualizarTarefaNoBackend = async (id: number, novoTitulo: string) => {
    try {
      const token = await AsyncStorage.getItem('token');
      await fetch(`http://localhost:3000/api/tarefas/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ titulo: novoTitulo }),
      });
    } catch (error) {
      console.error('Erro ao atualizar tarefa no backend:', error);
    }
  };

  // Função para excluir uma tarefa no backend
  const excluirTarefaNoBackend = async (id: number) => {
    try {
      const token = await AsyncStorage.getItem('token');
      await fetch(`http://localhost:3000/api/tarefas/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error('Erro ao excluir tarefa no backend:', error);
    }
  };

  // Retorna o contexto global de estado com as funções para manipular as tarefas
  return (
    <ContextoEstadoGlobal.Provider value={{ tarefas, adicionarTarefa, editarTarefa, excluirTarefa }}>
      {children}
    </ContextoEstadoGlobal.Provider>
  );
};

function salvarTarefas(arg0: Tarefa[]) {
  throw new Error('Function not implemented.');
}

import { useContext, useEffect, useMemo } from "react";
import { CarrinhoContext } from "@/context/CarrinhoContext";
import { ADD_PRODUTO, REMOVE_PRODUTO, UPDATE_QUANTIDADE } from "../reducers/carrinhoReducer";

const addProdutoAction = (novoProduto) => ({
  type: ADD_PRODUTO,
  payload: novoProduto
});

const removeProductionAction = (produtoId) => ({
  type: REMOVE_PRODUTO,
  payload: produtoId
});

const updateQuantityAction = (produtoId, quantidade) => ({
  type: UPDATE_QUANTIDADE,
  payload: { produtoId, quantidade }
});

export const useCarrinhoContext = () => {
  const { carrinho, quantidade, valorTotal, dispatch } = useContext(CarrinhoContext);

  
  function adicionarProduto(novoProduto) {
    dispatch(addProdutoAction(novoProduto))
  }

  function removerProduto(id) {
    const produto = carrinho.find((item) => item.id === id)

    if (produto && produto.quantidade > 1) {
      dispatch(updateQuantityAction(id, produto.quantidade - 1));
    } else {
      dispatch(removeProductionAction(id));
    }
  }

  function removerProdutoCarrinho(id) {
    dispatch(removeProductionAction(id));
  }

  return {
    carrinho,
    adicionarProduto,
    removerProduto,
    removerProdutoCarrinho,
    valorTotal,
    quantidade
  };
};
package com.example.server.dto;

import com.example.server.entities.IngredienteEntity;

public record IngredienteResponseDTO(Long id, String nome, String descricao , Integer quantidade, String unidade, double preco) {

	public IngredienteResponseDTO(IngredienteEntity ingrediente) {
		this(ingrediente.getIdIngredientes(), 
				ingrediente.getNome(),
				ingrediente.getDescricao(),
				ingrediente.getQuantidade(),
				ingrediente.getUnidade(),
				ingrediente.getPreco());
	}
}

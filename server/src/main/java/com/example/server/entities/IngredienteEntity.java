package com.example.server.entities;

import com.example.server.dto.IngredienteRequestDTO;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "ingredientes")
@Table(name = "ingredientes")
@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
@EqualsAndHashCode(of = "idIngredientes")
public class IngredienteEntity {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)	
	private Long idIngredientes;

	private String nome;
	
	private String descricao;
	
	private Integer quantidade;
	
	private String unidade;
	
	private double preco;

	public IngredienteEntity(IngredienteRequestDTO data) {
		this.nome = data.nome();
		this.descricao = data.descricao();
		this.quantidade = data.quantidade();
		this.unidade = data.unidade();
		this.preco = data.preco();
	}
	
	 
}

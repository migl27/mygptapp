#!/usr/bin/env python3
"""
Calculadora simples de mistura de substrato para cogumelos.

Regras:
- Cada saco tem 3 kg de substrato final (matéria seca + água).
- Humidade é dada em percentagem do peso total.
- Matéria seca: 12% farinha de trigo e 88% pellets de madeira.
"""


def calcular_mistura(num_sacos: int, humidade_percentual: float) -> dict:
    """Retorna um dicionário com os cálculos principais."""
    # Peso total do substrato (kg)
    peso_total = num_sacos * 3.0

    # Converte a percentagem de humidade para fração decimal
    humidade = humidade_percentual / 100.0

    # Água é a parte húmida do peso total
    agua = peso_total * humidade

    # Matéria seca é o restante
    materia_seca = peso_total - agua

    # Distribuição da matéria seca
    farinha = materia_seca * 0.12
    pellets = materia_seca * 0.88

    return {
        "peso_total": peso_total,
        "agua": agua,
        "materia_seca": materia_seca,
        "farinha": farinha,
        "pellets": pellets,
    }


def main() -> None:
    # Entradas do utilizador
    num_sacos = int(input("Número de sacos (cada um com 3 kg): ").strip())
    humidade_percentual = float(
        input("Humidade desejada (%) (ex.: 60 a 71): ").strip()
    )

    # Cálculo
    resultados = calcular_mistura(num_sacos, humidade_percentual)

    # Saída organizada
    print("\n--- Resultado ---")
    print(f"Peso total do substrato: {resultados['peso_total']:.2f} kg")
    print(
        "Quantidade total de água: "
        f"{resultados['agua']:.2f} kg (~{resultados['agua']:.2f} L)"
    )
    print(f"Quantidade total de pellets: {resultados['pellets']:.2f} kg")
    print(f"Quantidade total de farinha de trigo: {resultados['farinha']:.2f} kg")


if __name__ == "__main__":
    main()

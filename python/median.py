def median(lista):
  sorted_lista = sorted(lista)
  if len(sorted_lista) == 1:
    return sorted_lista[0]
  if len(sorted_lista) % 2 == 0:
    index1 = int((len(sorted_lista) / 2) - 1)
    index2 = int((len(sorted_lista) / 2))
    return (sorted_lista[index1] + sorted_lista[index2])/2
  else:
    index = len(sorted_lista) 
    return sorted_lista[index]


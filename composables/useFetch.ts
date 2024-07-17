import { ref, watchEffect, toValue } from 'vue'

export function useTestFetch(url: string | URL | Request) {
  const data = ref(null)
  const error = ref(null)

  const fetchData = () => {
    // сброс состояния перед выполнением запроса..
    data.value = null
    error.value = null

    // function toValue<T>(source: T | Ref<T> | (() => T)): T

    // ! Нормализует значения / ref-объекты / геттеры к значениям
    fetch(toValue(url))
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((err) => (error.value = err))
  }

  watchEffect(() => {
    fetchData()
  })

  return { data, error }
}
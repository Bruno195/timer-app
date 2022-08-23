import { CountdownContainer, Separator } from './styles'
import React, { useContext, useEffect } from 'react'

import { CyclesContext } from '../../../../contexts/CyclesContext'
import { differenceInSeconds } from 'date-fns'

export const Countdown = () => {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setSecondsPasses,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0
  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60
  const minutes = String(minutesAmount).padStart(2, '0')

  const seconds = String(secondsAmount).padStart(2, '0')
  // padStart preenche uma string até um tamanho específico, caso ela não tenha aquele tamanho ainda com algum caracter
  // floor = chão, sempre arredonda para baixo
  // ceil = sempre para o teto, para cima
  // round = acima de .5 ou igual a 0.5 é sempre para cima, abaixo, ou seja, 0.4 para baixo

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [activeCycle, minutes, seconds])

  useEffect(() => {
    let interval: number
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifferance = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )
        if (secondsDifferance >= totalSeconds) {
          markCurrentCycleAsFinished()
          setSecondsPasses(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondsPasses(secondsDifferance)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    setSecondsPasses,
    totalSeconds,
  ])
  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}

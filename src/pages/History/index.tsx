import { HistoryContainer, HistoryList, Status } from './styles'

import React from 'react'

export const History = () => {
  return (
    <HistoryContainer>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tasks</th>
              <th>Duration</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tasks</td>
              <td>20 minutes</td>
              <td>Two months ago</td>
              <td>
                <Status statusColor="green">Fineshed</Status>
              </td>
            </tr>
            <tr>
              <td>Tasks</td>
              <td>20 minutes</td>
              <td>Two months ago</td>
              <td>
                <Status statusColor="green">Fineshed</Status>
              </td>
            </tr>
            <tr>
              <td>Tasks</td>
              <td>20 minutes</td>
              <td>Two months ago</td>
              <td>
                <Status statusColor="green">Fineshed</Status>
              </td>
            </tr>
            <tr>
              <td>Tasks</td>
              <td>20 minutes</td>
              <td>Two months ago</td>
              <td>
                <Status statusColor="green">Fineshed</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}

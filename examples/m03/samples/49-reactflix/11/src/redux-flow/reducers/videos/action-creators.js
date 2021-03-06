'use strict'

import { ADD_VIDEO } from './actions'
import { db } from 'config/firebase'

export const registerVideo = ({ id, title }) => async (dispatch) => {
  console.log('cadastrando video...')
  await db.ref('videos').child(id).update({ id, title })

  console.log('video cadastrado!')
  dispatch(addVideo({ id, title }))
}

export const addVideo = ({ id, title }) => ({
  type: ADD_VIDEO,
  payload: { id, title }
})

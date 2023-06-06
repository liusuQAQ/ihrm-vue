import {createAPI} from '@/utils/request'
import { get } from 'https';

export const list = data => createAPI('/system/role', 'get', data)
export const simple = data => createAPI('/system/role/simple', 'get', data)
export const add = data => createAPI('/system/role', 'post', data)
export const update = data => createAPI(`/system/role/${data.id}`, 'put', data)
export const remove = data => createAPI(`/system/role/${data.id}`, 'delete', data)
export const detail = data => createAPI(`/system/role/${data.id}`, 'get', data)
export const assignPrem = data => createAPI(`/system/role/assignPrem`, 'put', data)
export const findAll = data => createAPI(`/system/role/list`,'get',data)


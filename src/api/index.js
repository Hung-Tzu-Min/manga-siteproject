import mockRequests from './mockAjax'

export const reqtest = () => {
    return mockRequests({ url: '/mock/test', method: 'get' })
}


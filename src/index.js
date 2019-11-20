import log from './log'
log.info('table')
log.table({ a: 1, b: 2 })

log.info(`${Array.from({ length: 100 }).join('>')}trace Number`)
log.trace(12)
log.info(`${Array.from({ length: 100 }).join('>')}trace String`)
log.trace(`12`)
log.info(`${Array.from({ length: 100 }).join('>')}info`)
log.info(12)
log.info(`${Array.from({ length: 100 }).join('>')}warn`)
log.warn(12)
log.info(`${Array.from({ length: 100 }).join('>')}error`)
log.error(12)
import MinimalEdgeRing from './MinimalEdgeRing'
import EdgeRing from '../../geomgraph/EdgeRing'
import ArrayList from '../../../../../java/util/ArrayList'
export default class MaximalEdgeRing extends EdgeRing {
  constructor () {
    super()
    MaximalEdgeRing.constructor_.apply(this, arguments)
  }

  buildMinimalRings () {
    const minEdgeRings = new ArrayList()
    let de = this._startDe
    do {
      if (de.getMinEdgeRing() === null) {
        const minEr = new MinimalEdgeRing(de, this._geometryFactory)
        minEdgeRings.add(minEr)
      }
      de = de.getNext()
    } while (de !== this._startDe)
    return minEdgeRings
  }

  setEdgeRing (de, er) {
    de.setEdgeRing(er)
  }

  linkDirectedEdgesForMinimalEdgeRings () {
    let de = this._startDe
    do {
      const node = de.getNode()
      node.getEdges().linkMinimalDirectedEdges(this)
      de = de.getNext()
    } while (de !== this._startDe)
  }

  getNext (de) {
    return de.getNext()
  }

  getClass () {
    return MaximalEdgeRing
  }

  get interfaces_ () {
    return []
  }
}
MaximalEdgeRing.constructor_ = function () {
  const start = arguments[0]; const geometryFactory = arguments[1]
  EdgeRing.constructor_.call(this, start, geometryFactory)
}

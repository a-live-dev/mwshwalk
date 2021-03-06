/*!
* meshwalk
 * https://github.com/yomotsu/meshwalk.js
 * (c) 2015 @yomotsu
 * Released under the MIT License.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.MW = {}));
})(this, (function (exports) { 'use strict';

	var THREE$2; // bind on install

	var onInstallHandlers = [];
	function install(_THREE) {
	  if (THREE$2 && _THREE === THREE$2) {
	    console.error('[THREE] already installed. `install` should be called only once.');
	    return;
	  }

	  THREE$2 = _THREE;
	  onInstallHandlers.forEach(function (handler) {
	    return handler();
	  });
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  Object.defineProperty(subClass, "prototype", {
	    writable: false
	  });
	  if (superClass) _setPrototypeOf(subClass, superClass);
	}

	function _getPrototypeOf(o) {
	  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	function _isNativeReflectConstruct() {
	  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	  if (Reflect.construct.sham) return false;
	  if (typeof Proxy === "function") return true;

	  try {
	    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	function _possibleConstructorReturn(self, call) {
	  if (call && (typeof call === "object" || typeof call === "function")) {
	    return call;
	  } else if (call !== void 0) {
	    throw new TypeError("Derived constructors may only return object or undefined");
	  }

	  return _assertThisInitialized(self);
	}

	function _createSuper(Derived) {
	  var hasNativeReflectConstruct = _isNativeReflectConstruct();

	  return function _createSuperInternal() {
	    var Super = _getPrototypeOf(Derived),
	        result;

	    if (hasNativeReflectConstruct) {
	      var NewTarget = _getPrototypeOf(this).constructor;

	      result = Reflect.construct(Super, arguments, NewTarget);
	    } else {
	      result = Super.apply(this, arguments);
	    }

	    return _possibleConstructorReturn(this, result);
	  };
	}

	function _superPropBase(object, property) {
	  while (!Object.prototype.hasOwnProperty.call(object, property)) {
	    object = _getPrototypeOf(object);
	    if (object === null) break;
	  }

	  return object;
	}

	function _get() {
	  if (typeof Reflect !== "undefined" && Reflect.get) {
	    _get = Reflect.get;
	  } else {
	    _get = function _get(target, property, receiver) {
	      var base = _superPropBase(target, property);

	      if (!base) return;
	      var desc = Object.getOwnPropertyDescriptor(base, property);

	      if (desc.get) {
	        return desc.get.call(arguments.length < 3 ? target : receiver);
	      }

	      return desc.value;
	    };
	  }

	  return _get.apply(this, arguments);
	}

	var vec3;
	var vec3_0;
	var vec3_1;
	var center;
	var extents;
	onInstallHandlers.push(function () {
	  vec3 = new THREE$2.Vector3();
	  vec3_0 = new THREE$2.Vector3();
	  vec3_1 = new THREE$2.Vector3();
	  center = new THREE$2.Vector3();
	  extents = new THREE$2.Vector3();
	}); // aabb: <THREE.Box3>
	// Plane: <THREE.Plane>

	function isIntersectionAABBPlane(aabb, Plane) {
	  center.addVectors(aabb.max, aabb.min).multiplyScalar(0.5);
	  extents.subVectors(aabb.max, center);
	  var r = extents.x * Math.abs(Plane.normal.x) + extents.y * Math.abs(Plane.normal.y) + extents.z * Math.abs(Plane.normal.z);
	  var s = Plane.normal.dot(center) - Plane.constant;
	  return Math.abs(s) <= r;
	}
	var v0;
	var v1;
	var v2;
	var f0;
	var f1;
	var f2;
	var a00;
	var a01;
	var a02;
	var a10;
	var a11;
	var a12;
	var a20;
	var a21;
	var a22;
	var plane;
	onInstallHandlers.push(function () {
	  v0 = new THREE$2.Vector3();
	  v1 = new THREE$2.Vector3();
	  v2 = new THREE$2.Vector3();
	  f0 = new THREE$2.Vector3();
	  f1 = new THREE$2.Vector3();
	  f2 = new THREE$2.Vector3();
	  a00 = new THREE$2.Vector3();
	  a01 = new THREE$2.Vector3();
	  a02 = new THREE$2.Vector3();
	  a10 = new THREE$2.Vector3();
	  a11 = new THREE$2.Vector3();
	  a12 = new THREE$2.Vector3();
	  a20 = new THREE$2.Vector3();
	  a21 = new THREE$2.Vector3();
	  a22 = new THREE$2.Vector3();
	  plane = new THREE$2.Plane();
	}); // based on http://www.gamedev.net/topic/534655-aabb-triangleplane-intersection--distance-to-plane-is-incorrect-i-have-solved-it/
	//
	// a: <THREE.Vector3>, // vertex of a triangle
	// b: <THREE.Vector3>, // vertex of a triangle
	// c: <THREE.Vector3>, // vertex of a triangle
	// aabb: <THREE.Box3>

	function isIntersectionTriangleAABB(a, b, c, aabb) {
	  var p0, p1, p2, r; // Compute box center and extents of AABoundingBox (if not already given in that format)

	  center.addVectors(aabb.max, aabb.min).multiplyScalar(0.5);
	  extents.subVectors(aabb.max, center); // Translate triangle as conceptually moving AABB to origin

	  v0.subVectors(a, center);
	  v1.subVectors(b, center);
	  v2.subVectors(c, center); // Compute edge vectors for triangle

	  f0.subVectors(v1, v0);
	  f1.subVectors(v2, v1);
	  f2.subVectors(v0, v2); // Test axes a00..a22 (category 3)

	  a00.set(0, -f0.z, f0.y);
	  a01.set(0, -f1.z, f1.y);
	  a02.set(0, -f2.z, f2.y);
	  a10.set(f0.z, 0, -f0.x);
	  a11.set(f1.z, 0, -f1.x);
	  a12.set(f2.z, 0, -f2.x);
	  a20.set(-f0.y, f0.x, 0);
	  a21.set(-f1.y, f1.x, 0);
	  a22.set(-f2.y, f2.x, 0); // Test axis a00

	  p0 = v0.dot(a00);
	  p1 = v1.dot(a00);
	  p2 = v2.dot(a00);
	  r = extents.y * Math.abs(f0.z) + extents.z * Math.abs(f0.y);

	  if (Math.max(-Math.max(p0, p1, p2), Math.min(p0, p1, p2)) > r) {
	    return false; // Axis is a separating axis
	  } // Test axis a01


	  p0 = v0.dot(a01);
	  p1 = v1.dot(a01);
	  p2 = v2.dot(a01);
	  r = extents.y * Math.abs(f1.z) + extents.z * Math.abs(f1.y);

	  if (Math.max(-Math.max(p0, p1, p2), Math.min(p0, p1, p2)) > r) {
	    return false; // Axis is a separating axis
	  } // Test axis a02


	  p0 = v0.dot(a02);
	  p1 = v1.dot(a02);
	  p2 = v2.dot(a02);
	  r = extents.y * Math.abs(f2.z) + extents.z * Math.abs(f2.y);

	  if (Math.max(-Math.max(p0, p1, p2), Math.min(p0, p1, p2)) > r) {
	    return false; // Axis is a separating axis
	  } // Test axis a10


	  p0 = v0.dot(a10);
	  p1 = v1.dot(a10);
	  p2 = v2.dot(a10);
	  r = extents.x * Math.abs(f0.z) + extents.z * Math.abs(f0.x);

	  if (Math.max(-Math.max(p0, p1, p2), Math.min(p0, p1, p2)) > r) {
	    return false; // Axis is a separating axis
	  } // Test axis a11


	  p0 = v0.dot(a11);
	  p1 = v1.dot(a11);
	  p2 = v2.dot(a11);
	  r = extents.x * Math.abs(f1.z) + extents.z * Math.abs(f1.x);

	  if (Math.max(-Math.max(p0, p1, p2), Math.min(p0, p1, p2)) > r) {
	    return false; // Axis is a separating axis
	  } // Test axis a12


	  p0 = v0.dot(a12);
	  p1 = v1.dot(a12);
	  p2 = v2.dot(a12);
	  r = extents.x * Math.abs(f2.z) + extents.z * Math.abs(f2.x);

	  if (Math.max(-Math.max(p0, p1, p2), Math.min(p0, p1, p2)) > r) {
	    return false; // Axis is a separating axis
	  } // Test axis a20


	  p0 = v0.dot(a20);
	  p1 = v1.dot(a20);
	  p2 = v2.dot(a20);
	  r = extents.x * Math.abs(f0.y) + extents.y * Math.abs(f0.x);

	  if (Math.max(-Math.max(p0, p1, p2), Math.min(p0, p1, p2)) > r) {
	    return false; // Axis is a separating axis
	  } // Test axis a21


	  p0 = v0.dot(a21);
	  p1 = v1.dot(a21);
	  p2 = v2.dot(a21);
	  r = extents.x * Math.abs(f1.y) + extents.y * Math.abs(f1.x);

	  if (Math.max(-Math.max(p0, p1, p2), Math.min(p0, p1, p2)) > r) {
	    return false; // Axis is a separating axis
	  } // Test axis a22


	  p0 = v0.dot(a22);
	  p1 = v1.dot(a22);
	  p2 = v2.dot(a22);
	  r = extents.x * Math.abs(f2.y) + extents.y * Math.abs(f2.x);

	  if (Math.max(-Math.max(p0, p1, p2), Math.min(p0, p1, p2)) > r) {
	    return false; // Axis is a separating axis
	  } // Test the three axes corresponding to the face normals of AABB b (category 1).
	  // Exit if...
	  // ... [-extents.x, extents.x] and [min(v0.x,v1.x,v2.x), max(v0.x,v1.x,v2.x)] do not overlap


	  if (Math.max(v0.x, v1.x, v2.x) < -extents.x || Math.min(v0.x, v1.x, v2.x) > extents.x) {
	    return false;
	  } // ... [-extents.y, extents.y] and [min(v0.y,v1.y,v2.y), max(v0.y,v1.y,v2.y)] do not overlap


	  if (Math.max(v0.y, v1.y, v2.y) < -extents.y || Math.min(v0.y, v1.y, v2.y) > extents.y) {
	    return false;
	  } // ... [-extents.z, extents.z] and [min(v0.z,v1.z,v2.z), max(v0.z,v1.z,v2.z)] do not overlap


	  if (Math.max(v0.z, v1.z, v2.z) < -extents.z || Math.min(v0.z, v1.z, v2.z) > extents.z) {
	    return false;
	  } // Test separating axis corresponding to triangle face normal (category 2)
	  // Face Normal is -ve as Triangle is clockwise winding (and XNA uses -z for into screen)


	  plane.normal.copy(f1).cross(f0).normalize();
	  plane.constant = plane.normal.dot(a);
	  return isIntersectionAABBPlane(aabb, plane);
	} // sphere1: <THREE.Sphere>
	// sphere: <THREE.Sphere>
	// aabb: <THREE.Box3>

	function isIntersectionSphereAABB(sphere, aabb) {
	  var sqDist = 0;
	  if (sphere.center.x < aabb.min.x) sqDist += (aabb.min.x - sphere.center.x) * (aabb.min.x - sphere.center.x);
	  if (sphere.center.x > aabb.max.x) sqDist += (sphere.center.x - aabb.max.x) * (sphere.center.x - aabb.max.x);
	  if (sphere.center.y < aabb.min.y) sqDist += (aabb.min.y - sphere.center.y) * (aabb.min.y - sphere.center.y);
	  if (sphere.center.y > aabb.max.y) sqDist += (sphere.center.y - aabb.max.y) * (sphere.center.y - aabb.max.y);
	  if (sphere.center.z < aabb.min.z) sqDist += (aabb.min.z - sphere.center.z) * (aabb.min.z - sphere.center.z);
	  if (sphere.center.z > aabb.max.z) sqDist += (sphere.center.z - aabb.max.z) * (sphere.center.z - aabb.max.z);
	  return sqDist <= sphere.radius * sphere.radius;
	}
	var A;
	var B;
	var C;
	var V;
	var AB;
	var BC;
	var CA;
	var Q1;
	var Q2;
	var Q3;
	var QC;
	var QA;
	var QB;
	var negatedNormal;
	onInstallHandlers.push(function () {
	  A = new THREE$2.Vector3();
	  B = new THREE$2.Vector3();
	  C = new THREE$2.Vector3();
	  V = new THREE$2.Vector3();
	  AB = new THREE$2.Vector3();
	  BC = new THREE$2.Vector3();
	  CA = new THREE$2.Vector3();
	  Q1 = new THREE$2.Vector3();
	  Q2 = new THREE$2.Vector3();
	  Q3 = new THREE$2.Vector3();
	  QC = new THREE$2.Vector3();
	  QA = new THREE$2.Vector3();
	  QB = new THREE$2.Vector3();
	  negatedNormal = new THREE$2.Vector3();
	}); //http://clb.demon.fi/MathGeoLib/docs/Triangle.cpp_code.html#459
	// sphere: <THREE.Sphere>
	// a: <THREE.Vector3>, // vertex of a triangle
	// b: <THREE.Vector3>, // vertex of a triangle
	// c: <THREE.Vector3>, // vertex of a triangle
	// normal: <THREE.Vector3>, // normal of a triangle

	function isIntersectionSphereTriangle(sphere, a, b, c, normal) {
	  // http://realtimecollisiondetection.net/blog/?p=103
	  // vs plain of triangle face
	  A.subVectors(a, sphere.center);
	  B.subVectors(b, sphere.center);
	  C.subVectors(c, sphere.center);
	  var rr = sphere.radius * sphere.radius;
	  V.crossVectors(vec3_0.subVectors(B, A), vec3_1.subVectors(C, A));
	  var d = A.dot(V);
	  var e = V.dot(V);

	  if (d * d > rr * e) {
	    return false;
	  } // vs triangle vertex


	  var aa = A.dot(A);
	  var ab = A.dot(B);
	  var ac = A.dot(C);
	  var bb = B.dot(B);
	  var bc = B.dot(C);
	  var cc = C.dot(C);

	  if (aa > rr & ab > aa & ac > aa || bb > rr & ab > bb & bc > bb || cc > rr & ac > cc & bc > cc) {
	    return false;
	  } // vs edge


	  AB.subVectors(B, A);
	  BC.subVectors(C, B);
	  CA.subVectors(A, C);
	  var d1 = ab - aa;
	  var d2 = bc - bb;
	  var d3 = ac - cc;
	  var e1 = AB.dot(AB);
	  var e2 = BC.dot(BC);
	  var e3 = CA.dot(CA);
	  Q1.subVectors(A.multiplyScalar(e1), AB.multiplyScalar(d1));
	  Q2.subVectors(B.multiplyScalar(e2), BC.multiplyScalar(d2));
	  Q3.subVectors(C.multiplyScalar(e3), CA.multiplyScalar(d3));
	  QC.subVectors(C.multiplyScalar(e1), Q1);
	  QA.subVectors(A.multiplyScalar(e2), Q2);
	  QB.subVectors(B.multiplyScalar(e3), Q3);

	  if (Q1.dot(Q1) > rr * e1 * e1 && Q1.dot(QC) >= 0 || Q2.dot(Q2) > rr * e2 * e2 && Q2.dot(QA) >= 0 || Q3.dot(Q3) > rr * e3 * e3 && Q3.dot(QB) >= 0) {
	    return false;
	  }

	  var distance = Math.sqrt(d * d / e) - sphere.radius - 1;
	  negatedNormal.set(-normal.x, -normal.y, -normal.z);
	  var contactPoint = sphere.center.clone().add(negatedNormal.multiplyScalar(distance));
	  return {
	    distance: distance,
	    contactPoint: contactPoint
	  };
	} // based on Real-Time Collision Detection Section 5.3.4
	// p: <THREE.Vector3>, // line3.start
	// q: <THREE.Vector3>, // line3.end
	// a: <THREE.Vector3>, // triangle.a
	// b: <THREE.Vector3>, // triangle.b
	// c: <THREE.Vector3>, // triangle.c
	// normal: <THREE.Vector3>, // triangle.normal, optional
	// var scalarTriple = function ( a, b, c ) {
	//   var m = b.clone().cross( c );
	//   return a.dot( m );
	// }
	// var vectorTriple = function ( a, b, c ) {
	//   var m = b.clone().cross( c );
	//   return a.clone().cross( m );
	// }
	// export function isIntersectionLineTrianglefunction ( p, q, a, b, c, precisio{
	//   var pq = q.clone().sub( p ),
	//       pa = a.clone().sub( p ),
	//       pb = b.clone().sub( p ),
	//       pc = c.clone().sub( p ),
	//       u, v, w;
	//   u = scalarTriple( pq, pc, pb );
	//   if ( u < 0 ) { return false; }
	//   v = scalarTriple( pq, pa, pc );
	//   if ( v < 0 ) { return false; }
	//   w = scalarTriple( pq, pb, pa );
	//   if ( w < 0 ) { return false; }
	//   var denom = 1 / ( u + v + w );
	//   u *= denom;
	//   v *= denom;
	//   w *= denom;
	//   var au = a.clone().multiplyScalar( u ),
	//       bv = b.clone().multiplyScalar( v ),
	//       cw = c.clone().multiplyScalar( w ),
	//       contactPoint = au.clone().add( bv ).add( cw );
	//   return {
	//     contactPoint: contactPoint
	//   }
	// }

	var ab;
	var ac;
	var qp;
	var n;
	var ap;
	var e;
	var au;
	var bv;
	var cw;
	onInstallHandlers.push(function () {
	  ab = new THREE$2.Vector3();
	  ac = new THREE$2.Vector3();
	  qp = new THREE$2.Vector3();
	  n = new THREE$2.Vector3();
	  ap = new THREE$2.Vector3();
	  e = new THREE$2.Vector3();
	  au = new THREE$2.Vector3();
	  bv = new THREE$2.Vector3();
	  cw = new THREE$2.Vector3();
	});
	function testSegmentTriangle(p, q, a, b, c) {
	  ab.subVectors(b, a);
	  ac.subVectors(c, a);
	  qp.subVectors(p, q);
	  n.copy(ab).cross(ac);
	  var d = qp.dot(n);
	  if (d <= 0) return false;
	  ap.subVectors(p, a);
	  var t = ap.dot(n);
	  if (t < 0) return 0;
	  if (t > d) return 0;
	  e.copy(qp).cross(ap);
	  var v = ac.dot(e);
	  if (v < 0 || v > d) return 0;
	  var w = vec3.copy(ab).dot(e) * -1;
	  if (w < 0 || v + w > d) return 0;
	  var ood = 1 / d;
	  t *= ood;
	  v *= ood;
	  w *= ood;
	  var u = 1 - v - w;
	  au.copy(a).multiplyScalar(u);
	  bv.copy(b).multiplyScalar(v);
	  cw.copy(c).multiplyScalar(w);
	  var contactPoint = au.clone().add(bv).add(cw);
	  return {
	    contactPoint: contactPoint
	  };
	}

	// based on http://marupeke296.com/COL_3D_No15_Octree.html
	//
	//       +------+------+
	//       |\   2  \   3  \
	//       | +------+------+
	//       + |\      \      \
	//       |\| +------+------+
	//       | + |      |      |
	//       +0|\|   6  |   7  |
	//        \| +------+------+
	//         + |      |      |
	//    y     \|   4  |   5  |
	//    |      +------+------+
	//    +--x
	//     \
	//      z
	//
	//
	//       +------+------+
	//       |\   6  \   7  \
	//       | +------+------+
	//       + |\      \      \
	//       |\| +------+------+
	//       | + |      |      |
	//       +4|\|   2  |   3  |
	//        \| +------+------+
	//         + |      |      |
	//  z y     \|   0  |   1  |
	//   \|      +------+------+
	//    +--x
	//
	// min: <THREE.Vector3>
	// max: <THREE.Vector3>
	// maxDepth: <Number>

	var Octree = /*#__PURE__*/function () {
	  function Octree(min, max, maxDepth) {
	    _classCallCheck(this, Octree);

	    this.min = min;
	    this.max = max;
	    this.maxDepth = maxDepth;
	    this.nodes = [];
	    this.isOctree = true;
	    var nodeBoxSize = new THREE$2.Vector3();
	    var nodeBoxMin = new THREE$2.Vector3();
	    var nodeBoxMax = new THREE$2.Vector3();

	    for (var depth = 0; depth < this.maxDepth; depth++) {
	      this.nodes.push([]);
	      var pow2 = Math.pow(2, depth);
	      var pow4 = Math.pow(4, depth);
	      nodeBoxSize.subVectors(this.max, this.min).divideScalar(pow2);

	      for (var i = 0, length = Math.pow(8, depth); i < length; i++) {
	        var indexX = i % pow2;
	        var indexY = i / pow4 | 0;
	        var indexZ = (i / pow2 | 0) % pow2;
	        nodeBoxMin.set(this.min.x + indexX * nodeBoxSize.x, this.min.y + indexY * nodeBoxSize.y, this.min.z + indexZ * nodeBoxSize.z);
	        nodeBoxMax.copy(nodeBoxMin).add(nodeBoxSize);
	        var mortonNumber = Octree.getMortonNumber(indexX, indexY, indexZ);
	        this.nodes[depth][mortonNumber] = new OctreeNode(this, depth, mortonNumber, nodeBoxMin, nodeBoxMax);
	      }
	    }
	  }

	  _createClass(Octree, [{
	    key: "importThreeMesh",
	    value: function importThreeMesh(threeMesh) {
	      threeMesh.updateMatrix();
	      var geometryId = threeMesh.geometry.uuid;
	      var geometry = threeMesh.geometry.clone();
	      geometry.applyMatrix4(threeMesh.matrix);
	      geometry.computeVertexNormals();

	      if (geometry instanceof THREE$2.BufferGeometry) {
	        if (geometry.index !== undefined) {
	          var indices = geometry.index.array;
	          var positions = geometry.attributes.position.array; // const normals   = geometry.attributes.normal.array;

	          var offsets = geometry.groups.length !== 0 ? geometry.groups : [{
	            start: 0,
	            count: indices.length,
	            materialIndex: 0
	          }];

	          for (var i = 0, l = offsets.length; i < l; ++i) {
	            var start = offsets[i].start;
	            var count = offsets[i].count;
	            var index = offsets[i].materialIndex;

	            for (var ii = start, ll = start + count; ii < ll; ii += 3) {
	              var a = index + indices[ii];
	              var b = index + indices[ii + 1];
	              var c = index + indices[ii + 2];
	              var vA = new THREE$2.Vector3().fromArray(positions, a * 3);
	              var vB = new THREE$2.Vector3().fromArray(positions, b * 3);
	              var vC = new THREE$2.Vector3().fromArray(positions, c * 3); // https://github.com/mrdoob/three.js/issues/4691
	              // make face normal

	              var cb = new THREE$2.Vector3().subVectors(vC, vB);
	              var ab = new THREE$2.Vector3().subVectors(vA, vB);
	              var faceNormal = cb.cross(ab).normalize().clone();
	              var face = new Face(vA, vB, vC, faceNormal, geometryId);
	              this.addFace(face);
	            }
	          }
	        }

	        return;
	      }

	      geometry.computeFaceNormals();

	      for (var _i = 0, _l = geometry.faces.length; _i < _l; _i++) {
	        var _face = new Face(geometry.vertices[geometry.faces[_i].a], geometry.vertices[geometry.faces[_i].b], geometry.vertices[geometry.faces[_i].c], geometry.faces[_i].normal, geometryId);

	        this.addFace(_face);
	      }
	    }
	  }, {
	    key: "addFace",
	    value: function addFace(face) {
	      var tmp = [];
	      var targetNodes = this.nodes[0].slice(0);

	      for (var i = 0, l = this.maxDepth; i < l; i++) {
	        for (var ii = 0, ll = targetNodes.length; ii < ll; ii++) {
	          var node = targetNodes[ii];
	          var isIntersected = isIntersectionTriangleAABB(face.a, face.b, face.c, node);

	          if (isIntersected) {
	            node.trianglePool.push(face);

	            if (i + 1 !== this.maxDepth) {
	              tmp = tmp.concat(node.getChildNodes());
	            }
	          }
	        }

	        if (tmp.length === 0) {
	          break;
	        }

	        targetNodes = tmp.slice(0);
	        tmp.length = 0;
	      }
	    }
	  }, {
	    key: "removeThreeMesh",
	    value: function removeThreeMesh(meshID) {
	      this.nodes.forEach(function (nodeDepth) {
	        nodeDepth.forEach(function (node) {
	          var newTrianglePool = [];
	          node.trianglePool.forEach(function (face) {
	            if (face.meshID !== meshID) {
	              newTrianglePool.push(face);
	            }
	          });
	          node.trianglePool = newTrianglePool;
	        });
	      });
	    }
	  }, {
	    key: "getIntersectedNodes",
	    value: function getIntersectedNodes(sphere, depth) {
	      var tmp = [];
	      var intersectedNodes = [];
	      var isIntersected = isIntersectionSphereAABB(sphere, this);
	      if (!isIntersected) return [];
	      var targetNodes = this.nodes[0].slice(0);

	      for (var i = 0, l = depth; i < l; i++) {
	        for (var ii = 0, ll = targetNodes.length; ii < ll; ii++) {
	          var node = targetNodes[ii];

	          var _isIntersected = isIntersectionSphereAABB(sphere, node);

	          if (_isIntersected) {
	            var isAtMaxDepth = i + 1 === depth;

	            if (isAtMaxDepth) {
	              if (node.trianglePool.length !== 0) {
	                intersectedNodes.push(node);
	              }
	            } else {
	              tmp = tmp.concat(node.getChildNodes());
	            }
	          }
	        }

	        targetNodes = tmp.slice(0);
	        tmp.length = 0;
	      }

	      return intersectedNodes;
	    }
	  }]);

	  return Octree;
	}();

	Octree.separate3Bit = function (n) {
	  n = (n | n << 8) & 0x0000f00f;
	  n = (n | n << 4) & 0x000c30c3;
	  n = (n | n << 2) & 0x00249249;
	  return n;
	};

	Octree.getMortonNumber = function (x, y, z) {
	  return Octree.separate3Bit(x) | Octree.separate3Bit(y) << 1 | Octree.separate3Bit(z) << 2;
	};

	Octree.uniqTrianglesFromNodes = function (nodes) {
	  var uniq = [];
	  var isContained = false;
	  if (nodes.length === 0) return [];
	  if (nodes.length === 1) return nodes[0].trianglePool.slice(0);

	  for (var i = 0, l = nodes.length; i < l; i++) {
	    for (var ii = 0, ll = nodes[i].trianglePool.length; ii < ll; ii++) {
	      for (var iii = 0, lll = uniq.length; iii < lll; iii++) {
	        if (nodes[i].trianglePool[ii] === uniq[iii]) {
	          isContained = true;
	        }
	      }

	      if (!isContained) {
	        uniq.push(nodes[i].trianglePool[ii]);
	      }

	      isContained = false;
	    }
	  }

	  return uniq;
	}; //


	var OctreeNode = /*#__PURE__*/function () {
	  function OctreeNode(tree, depth, mortonNumber, min, max) {
	    _classCallCheck(this, OctreeNode);

	    this.tree = tree;
	    this.depth = depth;
	    this.mortonNumber = mortonNumber;
	    this.min = new THREE$2.Vector3(min.x, min.y, min.z);
	    this.max = new THREE$2.Vector3(max.x, max.y, max.z);
	    this.trianglePool = [];
	  }

	  _createClass(OctreeNode, [{
	    key: "getParentNode",
	    value: function getParentNode() {
	      if (this.depth === 0) return null;
	      this.tree.nodes[this.depth][this.mortonNumber >> 3];
	    }
	  }, {
	    key: "getChildNodes",
	    value: function getChildNodes() {
	      if (this.tree.maxDepth === this.depth) {
	        return null;
	      }

	      var firstChild = this.mortonNumber << 3;
	      return [this.tree.nodes[this.depth + 1][firstChild], this.tree.nodes[this.depth + 1][firstChild + 1], this.tree.nodes[this.depth + 1][firstChild + 2], this.tree.nodes[this.depth + 1][firstChild + 3], this.tree.nodes[this.depth + 1][firstChild + 4], this.tree.nodes[this.depth + 1][firstChild + 5], this.tree.nodes[this.depth + 1][firstChild + 6], this.tree.nodes[this.depth + 1][firstChild + 7]];
	    }
	  }]);

	  return OctreeNode;
	}(); //
	// a: <THREE.Vector3>
	// b: <THREE.Vector3>
	// c: <THREE.Vector3>
	// normal: <THREE.Vector3>
	// meshID: <String>


	var Face = /*#__PURE__*/_createClass(function Face(a, b, c, normal, meshID) {
	  _classCallCheck(this, Face);

	  this.a = a.clone();
	  this.b = b.clone();
	  this.c = c.clone();
	  this.normal = normal.clone();
	  this.meshID = meshID;
	}); // origin   : <THREE.Vector3>
	// direction: <THREE.Vector3>
	// distance : <Float>
	// class Ray{
	// 	constructor( origin, direction, distance ) {
	// 		this.origin = origin;
	// 		this.direction = direction;
	// 		this.distance = distance;
	// 	}
	// }

	var sphere;
	onInstallHandlers.push(function () {
	  sphere = new THREE$2.Sphere();
	});
	var World = /*#__PURE__*/function () {
	  function World() {
	    _classCallCheck(this, World);

	    this.colliderPool = [];
	    this.characterPool = [];
	  }

	  _createClass(World, [{
	    key: "add",
	    value: function add(object) {
	      if (object.isOctree) {
	        this.colliderPool.push(object);
	      } else if (object.isCharacterController) {
	        this.characterPool.push(object);
	        object.world = this;
	      }
	    }
	  }, {
	    key: "step",
	    value: function step(dt) {
	      for (var i = 0, l = this.characterPool.length; i < l; i++) {
	        var character = this.characterPool[i];
	        var faces = void 0; // octree ??????????????? node ??????????????? face ?????????
	        // character ????????????????????????

	        for (var ii = 0, ll = this.colliderPool.length; ii < ll; ii++) {
	          var octree = this.colliderPool[ii];
	          sphere.set(character.center, character.radius + character.groundPadding);
	          var intersectedNodes = octree.getIntersectedNodes(sphere, octree.maxDepth);
	          faces = Octree.uniqTrianglesFromNodes(intersectedNodes);
	        }

	        character.collisionCandidate = faces;
	        character.update(dt);
	      }
	    }
	  }]);

	  return World;
	}();

	// based on https://github.com/mrdoob/eventdispatcher.js/
	var EventDispatcher$1 = /*#__PURE__*/function () {
	  function EventDispatcher() {
	    _classCallCheck(this, EventDispatcher);

	    this._listeners = {};
	  }

	  _createClass(EventDispatcher, [{
	    key: "addEventListener",
	    value: function addEventListener(type, listener) {
	      var listeners = this._listeners;

	      if (listeners[type] === undefined) {
	        listeners[type] = [];
	      }

	      if (listeners[type].indexOf(listener) === -1) {
	        listeners[type].push(listener);
	      }
	    }
	  }, {
	    key: "hasEventListener",
	    value: function hasEventListener(type, listener) {
	      var listeners = this._listeners;
	      return listeners[type] !== undefined && listeners[type].indexOf(listener) !== -1;
	    }
	  }, {
	    key: "removeEventListener",
	    value: function removeEventListener(type, listener) {
	      var listeners = this._listeners;
	      var listenerArray = listeners[type];

	      if (listenerArray !== undefined) {
	        var index = listenerArray.indexOf(listener);

	        if (index !== -1) {
	          listenerArray.splice(index, 1);
	        }
	      }
	    }
	  }, {
	    key: "dispatchEvent",
	    value: function dispatchEvent(event) {
	      var listeners = this._listeners;
	      var listenerArray = listeners[event.type];

	      if (listenerArray !== undefined) {
	        event.target = this;
	        var array = listenerArray.slice(0);

	        for (var i = 0, l = array.length; i < l; i++) {
	          array[i].call(this, event);
	        }
	      }
	    }
	  }]);

	  return EventDispatcher;
	}();

	var FALL_VELOCITY = -20;
	var JUMP_DURATION = 1000;
	var PI_HALF$1 = Math.PI * 0.5;
	var PI_ONE_HALF = Math.PI * 1.5;
	var direction2D;
	var wallNormal2D;
	var groundingHead;
	var groundingTo;
	var point1;
	var point2;
	var direction;
	var translateScoped;
	var translate;
	onInstallHandlers.push(function () {
	  direction2D = new THREE$2.Vector2();
	  wallNormal2D = new THREE$2.Vector2();
	  groundingHead = new THREE$2.Vector3();
	  groundingTo = new THREE$2.Vector3();
	  point1 = new THREE$2.Vector3();
	  point2 = new THREE$2.Vector3();
	  direction = new THREE$2.Vector3();
	  translateScoped = new THREE$2.Vector3();
	  translate = new THREE$2.Vector3();
	});
	var CharacterController = /*#__PURE__*/function (_EventDispatcher) {
	  _inherits(CharacterController, _EventDispatcher);

	  var _super = _createSuper(CharacterController);

	  function CharacterController(object3d, radius) {
	    var _this;

	    _classCallCheck(this, CharacterController);

	    _this = _super.call(this);
	    _this.isCharacterController = true;
	    _this.object = object3d;
	    _this.center = _this.object.position.clone();
	    _this.radius = radius;
	    _this.groundPadding = .5;
	    _this.maxSlopeGradient = Math.cos(50 * THREE$2.Math.DEG2RAD);
	    _this.isGrounded = false;
	    _this.isOnSlope = false;
	    _this.isIdling = false;
	    _this.isRunning = false;
	    _this.isJumping = false;
	    _this.direction = 0; // 0 to 2PI(=360deg) in rad

	    _this.movementSpeed = 10; // Meters Per Second

	    _this.velocity = new THREE$2.Vector3(0, -10, 0);
	    _this.currentJumpPower = 0;
	    _this.jumpStartTime = 0;
	    _this.groundHeight = 0;
	    _this.groundNormal = new THREE$2.Vector3();
	    _this.collisionCandidate;
	    _this.contactInfo = [];
	    var isFirstUpdate = true;
	    var wasGrounded;
	    var wasOnSlope; // let wasIdling;

	    var wasRunning;
	    var wasJumping;

	    _this._events = function () {
	      // ??????????????????????????????????????????????????????
	      if (isFirstUpdate) {
	        isFirstUpdate = false;
	        wasGrounded = _this.isGrounded;
	        wasOnSlope = _this.isOnSlope; // wasIdling   = this.isIdling;

	        wasRunning = _this.isRunning;
	        wasJumping = _this.isJumping;
	        return;
	      }

	      if (!wasRunning && !_this.isRunning && _this.isGrounded && !_this.isIdling) {
	        _this.isIdling = true;

	        _this.dispatchEvent({
	          type: 'startIdling'
	        });
	      } else if (!wasRunning && _this.isRunning && !_this.isJumping && _this.isGrounded || !wasGrounded && _this.isGrounded && _this.isRunning || wasOnSlope && !_this.isOnSlope && _this.isRunning && _this.isGrounded) {
	        _this.isIdling = false;

	        _this.dispatchEvent({
	          type: 'startWalking'
	        });
	      } else if (!wasJumping && _this.isJumping) {
	        _this.isIdling = false;

	        _this.dispatchEvent({
	          type: 'startJumping'
	        });
	      } else if (!wasOnSlope && _this.isOnSlope) {
	        _this.dispatchEvent({
	          type: 'startSliding'
	        });
	      } else if (wasGrounded && !_this.isGrounded && !_this.isJumping) {
	        _this.dispatchEvent({
	          type: 'startFalling'
	        });
	      }

	      if (!wasGrounded && _this.isGrounded) ;

	      wasGrounded = _this.isGrounded;
	      wasOnSlope = _this.isOnSlope; // wasIdling   = this.isIdling;

	      wasRunning = _this.isRunning;
	      wasJumping = _this.isJumping;
	    };

	    return _this;
	  }

	  _createClass(CharacterController, [{
	    key: "update",
	    value: function update(dt) {
	      // ?????????????????????????????????
	      this.isGrounded = false;
	      this.isOnSlope = false;
	      this.groundHeight = -Infinity;
	      this.groundNormal.set(0, 1, 0);

	      this._updateGrounding();

	      this._updateJumping();

	      this._updatePosition(dt);

	      this._collisionDetection();

	      this._solvePosition();

	      this._updateVelocity();

	      this._events();
	    }
	  }, {
	    key: "_updateVelocity",
	    value: function _updateVelocity() {
	      var frontDirection = -Math.cos(this.direction);
	      var rightDirection = -Math.sin(this.direction);
	      var isHittingCeiling = false;
	      this.velocity.set(rightDirection * this.movementSpeed * this.isRunning, FALL_VELOCITY, frontDirection * this.movementSpeed * this.isRunning); // ????????????????????????????????????????????????????????????????????????

	      if (this.contactInfo.length === 0 && !this.isJumping) {
	        // ???????????????????????????????????????????????????
	        return;
	      } else if (this.isGrounded && !this.isOnSlope && !this.isJumping) {
	        // ???????????????????????????????????????????????????????????????????????????
	        this.velocity.y = 0;
	      } else if (this.isOnSlope) {
	        // TODO 0.2 ???????????????????????????????????????????????????????????????????????????
	        var slidingDownVelocity = FALL_VELOCITY;
	        var horizontalSpeed = -slidingDownVelocity / (1 - this.groundNormal.y) * 0.2;
	        this.velocity.x = this.groundNormal.x * horizontalSpeed;
	        this.velocity.y = FALL_VELOCITY;
	        this.velocity.z = this.groundNormal.z * horizontalSpeed;
	      } else if (!this.isGrounded && !this.isOnSlope && this.isJumping) {
	        // ?????????????????????
	        this.velocity.y = this.currentJumpPower * -FALL_VELOCITY;
	      } // ????????????????????????????????????????????????0???????????????
	      // vs walls and sliding on the wall


	      direction2D.set(rightDirection, frontDirection); // const frontAngle = Math.atan2( direction2D.y, direction2D.x );

	      var negativeFrontAngle = Math.atan2(-direction2D.y, -direction2D.x);

	      for (var i = 0, l = this.contactInfo.length; i < l; i++) {
	        var normal = this.contactInfo[i].face.normal; // var distance = this.contactInfo[ i ].distance;

	        if (this.maxSlopeGradient < normal.y || this.isOnSlope) {
	          // ??????????????????????????????????????????????????????????????????????????????
	          // ????????????????????????????????????
	          continue;
	        }

	        if (!isHittingCeiling && normal.y < 0) {
	          isHittingCeiling = true;
	        }

	        wallNormal2D.set(normal.x, normal.z).normalize();
	        var wallAngle = Math.atan2(wallNormal2D.y, wallNormal2D.x);

	        if (Math.abs(negativeFrontAngle - wallAngle) >= PI_HALF$1 && //  90deg
	        Math.abs(negativeFrontAngle - wallAngle) <= PI_ONE_HALF // 270deg
	        ) {
	          // ???????????????????????????????????????????????????????????????????????????
	          // ????????????????????????????????????
	          continue;
	        } // ??????????????????????????????????????????????????????????????????
	        // ?????????????????????????????????????????????????????????????????????????????????0?????????


	        wallNormal2D.set(direction2D.dot(wallNormal2D) * wallNormal2D.x, direction2D.dot(wallNormal2D) * wallNormal2D.y);
	        direction2D.sub(wallNormal2D);
	        this.velocity.x = direction2D.x * this.movementSpeed * this.isRunning;
	        this.velocity.z = direction2D.y * this.movementSpeed * this.isRunning;
	      } // ???????????????????????????????????????????????????????????????????????????


	      if (isHittingCeiling) {
	        this.velocity.y = Math.min(0, this.velocity.y);
	        this.isJumping = false;
	      }
	    }
	  }, {
	    key: "_updateGrounding",
	    value: function _updateGrounding() {
	      // "???????????????????????????????????????????????? (segment)" vs "???????????? (triangle)" ???
	      // ?????????????????????
	      // ???????????????????????????????????????????????????????????????groundPadding???????????????????????????
	      // ????????? (isGrounded) ???????????????????????????
	      //
	      //   ___
	      //  / | \
	      // |  |  | player sphere
	      //  \_|_/
	      //    |
	      //---[+]---- ground
	      //    |
	      //    |
	      //    | segment (player's head to almost -infinity)
	      var groundContactInfo;
	      var groundContactInfoTmp;
	      var faces = this.collisionCandidate;
	      groundingHead.set(this.center.x, this.center.y + this.radius, this.center.z);
	      groundingTo.set(this.center.x, this.center.y - 1e10, this.center.z);

	      for (var i = 0, l = faces.length; i < l; i++) {
	        groundContactInfoTmp = testSegmentTriangle(groundingHead, groundingTo, faces[i].a, faces[i].b, faces[i].c);

	        if (groundContactInfoTmp && !groundContactInfo) {
	          groundContactInfo = groundContactInfoTmp;
	          groundContactInfo.face = faces[i];
	        } else if (groundContactInfoTmp && groundContactInfoTmp.contactPoint.y > groundContactInfo.contactPoint.y) {
	          groundContactInfo = groundContactInfoTmp;
	          groundContactInfo.face = faces[i];
	        }
	      }

	      if (!groundContactInfo) {
	        return;
	      }

	      this.groundHeight = groundContactInfo.contactPoint.y;
	      this.groundNormal.copy(groundContactInfo.face.normal);
	      var top = groundingHead.y;
	      var bottom = this.center.y - this.radius - this.groundPadding; // ?????????????????????????????????????????????????????????????????????????????????

	      if (this.isJumping && 0 < this.currentJumpPower) {
	        this.isOnSlope = false;
	        this.isGrounded = false;
	        return;
	      }

	      this.isGrounded = bottom <= this.groundHeight && this.groundHeight <= top;
	      this.isOnSlope = this.groundNormal.y <= this.maxSlopeGradient;

	      if (this.isGrounded) {
	        this.isJumping = false;
	      }
	    }
	  }, {
	    key: "_updatePosition",
	    value: function _updatePosition(dt) {
	      // ????????????????????????????????????(?????? * ??????)??????
	      // center?????????????????????
	      // ?????????????????????????????????????????????????????????????????????????????????????????????
	      // ??????isGrounded???????????????????????????y??????????????????????????????
	      var groundedY = this.groundHeight + this.radius;
	      var x = this.center.x + this.velocity.x * dt;
	      var y = this.center.y + this.velocity.y * dt;
	      var z = this.center.z + this.velocity.z * dt;
	      this.center.set(x, this.isGrounded ? groundedY : y, z);
	    }
	  }, {
	    key: "_collisionDetection",
	    value: function _collisionDetection() {
	      // ???????????????????????????????????? (collisionCandidate) ?????????????????????
	      // ????????????????????????????????????????????????????????????
	      // this.contactInfo???????????????
	      var faces = this.collisionCandidate;
	      this.contactInfo.length = 0;

	      for (var i = 0, l = faces.length; i < l; i++) {
	        var contactInfo = isIntersectionSphereTriangle(this, faces[i].a, faces[i].b, faces[i].c, faces[i].normal);
	        if (!contactInfo) continue;
	        contactInfo.face = faces[i];
	        this.contactInfo.push(contactInfo);
	      }
	    }
	  }, {
	    key: "_solvePosition",
	    value: function _solvePosition() {
	      // updatePosition() ??? center ??????????????????
	      // ?????????????????????????????????????????????
	      // ?????????????????????????????????????????????
	      var face;
	      var normal; // let distance;

	      if (this.contactInfo.length === 0) {
	        // ??????????????????????????????
	        // center???????????????????????????????????????
	        this.object.position.copy(this.center);
	        return;
	      } //
	      // vs walls and sliding on the wall


	      translate.set(0, 0, 0);

	      for (var i = 0, l = this.contactInfo.length; i < l; i++) {
	        face = this.contactInfo[i].face;
	        normal = this.contactInfo[i].face.normal; // distance = this.contactInfo[ i ].distance;
	        // if ( 0 <= distance ) {
	        //   // ??????????????????????????? 0 ?????????????????????????????????????????????????????????
	        //   // ????????????
	        //   continue;
	        // }

	        if (this.maxSlopeGradient < normal.y) {
	          // this triangle is a ground or slope, not a wall or ceil
	          // ?????????????????????????????????????????????????????????
	          // ?????????????????? updatePosition() ??????????????????????????????????????????
	          continue;
	        } // ???????????????????????????????????????


	        var isSlopeFace = this.maxSlopeGradient <= face.normal.y && face.normal.y < 1; // ?????????????????????????????????????????????????????????????????????????????????

	        if (this.isJumping && 0 >= this.currentJumpPower && isSlopeFace) {
	          this.isJumping = false;
	          this.isGrounded = true; // console.log( 'jump end' );
	        }

	        if (this.isGrounded || this.isOnSlope) {
	          // ??????????????????????????????y(???)????????????????????????
	          // x, z (???) ???????????????????????????????????????
	          // http://gamedev.stackexchange.com/questions/80293/how-do-i-resolve-a-sphere-triangle-collision-in-a-given-direction
	          point1.copy(normal).multiplyScalar(-this.radius).add(this.center);
	          direction.set(normal.x, 0, normal.z).normalize();
	          var plainD = face.a.dot(normal);
	          var t = (plainD - (normal.x * point1.x + normal.y * point1.y + normal.z * point1.z)) / (normal.x * direction.x + normal.y * direction.y + normal.z * direction.z);
	          point2.copy(direction).multiplyScalar(t).add(point1);
	          translateScoped.subVectors(point2, point1);

	          if (Math.abs(translate.x) > Math.abs(translateScoped.x)) {
	            translate.x += translateScoped.x;
	          }

	          if (Math.abs(translate.z) > Math.abs(translateScoped.z)) {
	            translate.z += translateScoped.z;
	          } // break;


	          continue;
	        }
	      }

	      this.center.add(translate);
	      this.object.position.copy(this.center);
	    }
	  }, {
	    key: "setDirection",
	    value: function setDirection() {}
	  }, {
	    key: "jump",
	    value: function jump() {
	      if (this.isJumping || !this.isGrounded || this.isOnSlope) return;
	      this.jumpStartTime = performance.now();
	      this.currentJumpPower = 1;
	      this.isJumping = true;
	    }
	  }, {
	    key: "_updateJumping",
	    value: function _updateJumping() {
	      if (!this.isJumping) return;
	      var elapsed = performance.now() - this.jumpStartTime;
	      var progress = elapsed / JUMP_DURATION;
	      this.currentJumpPower = Math.cos(Math.min(progress, 1) * Math.PI);
	    }
	  }]);

	  return CharacterController;
	}(EventDispatcher$1);

	var TURN_DURATION = 200;
	var TAU = 2 * Math.PI;

	var modulo = function modulo(n, d) {
	  return (n % d + d) % d;
	};

	var getDeltaTurnAngle = function getDeltaTurnAngle(current, target) {
	  var a = modulo(current - target, TAU);
	  var b = modulo(target - current, TAU);
	  return a < b ? -a : b;
	};

	var AnimationController = /*#__PURE__*/function () {
	  function AnimationController(mesh) {
	    _classCallCheck(this, AnimationController);

	    this.mesh = mesh;
	    this.motion = {};
	    this.mixer = new THREE.AnimationMixer(mesh);
	    this.currentMotionName = '';

	    for (var i = 0, l = this.mesh.geometry.animations.length; i < l; i++) {
	      var anim = this.mesh.geometry.animations[i];
	      this.motion[anim.name] = this.mixer.clipAction(anim);
	      this.motion[anim.name].setEffectiveWeight(1);
	    }
	  }

	  _createClass(AnimationController, [{
	    key: "play",
	    value: function play(name) {
	      if (this.currentMotionName === name) return;

	      if (this.motion[this.currentMotionName]) {
	        var from = this.motion[this.currentMotionName].play();
	        var to = this.motion[name].play();
	        from.enabled = true;
	        to.enabled = true;
	        from.crossFadeTo(to, .3);
	      } else {
	        this.motion[name].enabled = true;
	        this.motion[name].play();
	      }

	      this.currentMotionName = name;
	    }
	  }, {
	    key: "turn",
	    value: function turn(rad, immediate) {
	      var that = this;
	      var prevRotY = this.mesh.rotation.y;
	      var targetRotY = rad;
	      var deltaY = getDeltaTurnAngle(prevRotY, targetRotY); // const duration   = Math.abs( deltaY ) * 100;

	      var start = Date.now();
	      var end = start + TURN_DURATION;
	      var progress = 0;

	      if (immediate) {
	        this.mesh.rotation.y = targetRotY;
	        return;
	      }

	      if (this._targetRotY === targetRotY) return;
	      this._targetRotY = targetRotY;
	      {
	        var _targetRotY = targetRotY;

	        (function interval() {
	          var now = Date.now();
	          var isAborted = _targetRotY !== that._targetRotY;
	          if (isAborted) return;

	          if (now >= end) {
	            that.mesh.rotation.y = _targetRotY;
	            delete that._targetRotY;
	            return;
	          }

	          requestAnimationFrame(interval);
	          progress = (now - start) / TURN_DURATION;
	          that.mesh.rotation.y = prevRotY + deltaY * progress;
	        })();
	      }
	    }
	  }, {
	    key: "update",
	    value: function update(delta) {
	      this.mixer.update(delta);
	    }
	  }]);

	  return AnimationController;
	}();

	var KEY_W = 87;
	var KEY_UP = 38;
	var KEY_S = 83;
	var KEY_DOWN = 40;
	var KEY_A = 65;
	var KEY_LEFT = 37;
	var KEY_D = 68;
	var KEY_RIGHT = 39;
	var KEY_SPACE = 32;
	var DEG2RAD = Math.PI / 180;
	var DEG_0 = 0 * DEG2RAD;
	var DEG_45 = 45 * DEG2RAD;
	var DEG_90 = 90 * DEG2RAD;
	var DEG_135 = 135 * DEG2RAD;
	var DEG_180 = 180 * DEG2RAD;
	var DEG_225 = 225 * DEG2RAD;
	var DEG_270 = 270 * DEG2RAD;
	var DEG_315 = 315 * DEG2RAD;
	var KeyInputControl = /*#__PURE__*/function (_EventDispatcher) {
	  _inherits(KeyInputControl, _EventDispatcher);

	  var _super = _createSuper(KeyInputControl);

	  function KeyInputControl() {
	    var _this;

	    _classCallCheck(this, KeyInputControl);

	    _this = _super.call(this);
	    _this.isDisabled = false;
	    _this.isUp = false;
	    _this.isDown = false;
	    _this.isLeft = false;
	    _this.isRight = false;
	    _this.isMoveKeyHolding = false;
	    _this.frontAngle = 0;
	    _this._keydownListener = onKeyDown.bind(_assertThisInitialized(_this));
	    _this._keyupListener = onKeyUp.bind(_assertThisInitialized(_this));
	    _this._blurListener = onBlur.bind(_assertThisInitialized(_this));
	    window.addEventListener('keydown', _this._keydownListener);
	    window.addEventListener('keyup', _this._keyupListener);
	    window.addEventListener('blur', _this._blurListener);
	    return _this;
	  }

	  _createClass(KeyInputControl, [{
	    key: "jump",
	    value: function jump() {
	      this.dispatchEvent({
	        type: 'jumpkeypress'
	      });
	    }
	  }, {
	    key: "updateAngle",
	    value: function updateAngle() {
	      var up = this.isUp;
	      var down = this.isDown;
	      var left = this.isLeft;
	      var right = this.isRight;
	      if (up && !left && !down && !right) this.frontAngle = DEG_0;else if (up && left && !down && !right) this.frontAngle = DEG_45;else if (!up && left && !down && !right) this.frontAngle = DEG_90;else if (!up && left && down && !right) this.frontAngle = DEG_135;else if (!up && !left && down && !right) this.frontAngle = DEG_180;else if (!up && !left && down && right) this.frontAngle = DEG_225;else if (!up && !left && !down && right) this.frontAngle = DEG_270;else if (up && !left && !down && right) this.frontAngle = DEG_315;
	    }
	  }]);

	  return KeyInputControl;
	}(EventDispatcher$1);

	function onKeyDown(event) {
	  if (this.isDisabled) return;
	  if (isInputEvent(event)) return;

	  switch (event.keyCode) {
	    case KEY_W:
	    case KEY_UP:
	      this.isUp = true;
	      break;

	    case KEY_S:
	    case KEY_DOWN:
	      this.isDown = true;
	      break;

	    case KEY_A:
	    case KEY_LEFT:
	      this.isLeft = true;
	      break;

	    case KEY_D:
	    case KEY_RIGHT:
	      this.isRight = true;
	      break;

	    case KEY_SPACE:
	      this.jump();
	      break;

	    default:
	      return;
	  }

	  var prevAngle = this.frontAngle;
	  this.updateAngle();

	  if (prevAngle !== this.frontAngle) {
	    this.dispatchEvent({
	      type: 'movekeychange'
	    });
	  }

	  if ((this.isUp || this.isDown || this.isLeft || this.isRight) && !this.isMoveKeyHolding) {
	    this.isMoveKeyHolding = true;
	    this.dispatchEvent({
	      type: 'movekeyon'
	    });
	  }
	}

	function onKeyUp(event) {
	  if (this.isDisabled) return;

	  switch (event.keyCode) {
	    case KEY_W:
	    case KEY_UP:
	      this.isUp = false;
	      break;

	    case KEY_S:
	    case KEY_DOWN:
	      this.isDown = false;
	      break;

	    case KEY_A:
	    case KEY_LEFT:
	      this.isLeft = false;
	      break;

	    case KEY_D:
	    case KEY_RIGHT:
	      this.isRight = false;
	      break;

	    case KEY_SPACE:
	      break;

	    default:
	      return;
	  }

	  var prevAngle = this.frontAngle;
	  this.updateAngle();

	  if (prevAngle !== this.frontAngle) {
	    this.dispatchEvent({
	      type: 'movekeychange'
	    });
	  }

	  if (!this.isUp && !this.isDown && !this.isLeft && !this.isRight && (event.keyCode === KEY_W || event.keyCode === KEY_UP || event.keyCode === KEY_S || event.keyCode === KEY_DOWN || event.keyCode === KEY_A || event.keyCode === KEY_LEFT || event.keyCode === KEY_D || event.keyCode === KEY_RIGHT)) {
	    this.isMoveKeyHolding = false;
	    this.dispatchEvent({
	      type: 'movekeyoff'
	    });
	  }
	}

	function onBlur() {
	  this.isUp = false;
	  this.isDown = false;
	  this.isLeft = false;
	  this.isRight = false;

	  if (this.isMoveKeyHolding) {
	    this.isMoveKeyHolding = false;
	    this.dispatchEvent({
	      type: 'movekeyoff'
	    });
	  }
	}

	function isInputEvent(event) {
	  var target = event.target;
	  return target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA' || target.isContentEditable;
	}

	/*!
	 * camera-controls
	 * https://github.com/yomotsu/camera-controls
	 * (c) 2017 @yomotsu
	 * Released under the MIT License.
	 */
	var ACTION;
	(function (ACTION) {
	    ACTION[ACTION["NONE"] = 0] = "NONE";
	    ACTION[ACTION["ROTATE"] = 1] = "ROTATE";
	    ACTION[ACTION["TRUCK"] = 2] = "TRUCK";
	    ACTION[ACTION["OFFSET"] = 3] = "OFFSET";
	    ACTION[ACTION["DOLLY"] = 4] = "DOLLY";
	    ACTION[ACTION["ZOOM"] = 5] = "ZOOM";
	    ACTION[ACTION["TOUCH_ROTATE"] = 6] = "TOUCH_ROTATE";
	    ACTION[ACTION["TOUCH_TRUCK"] = 7] = "TOUCH_TRUCK";
	    ACTION[ACTION["TOUCH_OFFSET"] = 8] = "TOUCH_OFFSET";
	    ACTION[ACTION["TOUCH_DOLLY"] = 9] = "TOUCH_DOLLY";
	    ACTION[ACTION["TOUCH_ZOOM"] = 10] = "TOUCH_ZOOM";
	    ACTION[ACTION["TOUCH_DOLLY_TRUCK"] = 11] = "TOUCH_DOLLY_TRUCK";
	    ACTION[ACTION["TOUCH_DOLLY_OFFSET"] = 12] = "TOUCH_DOLLY_OFFSET";
	    ACTION[ACTION["TOUCH_ZOOM_TRUCK"] = 13] = "TOUCH_ZOOM_TRUCK";
	    ACTION[ACTION["TOUCH_ZOOM_OFFSET"] = 14] = "TOUCH_ZOOM_OFFSET";
	})(ACTION || (ACTION = {}));
	function isPerspectiveCamera(camera) {
	    return camera.isPerspectiveCamera;
	}
	function isOrthographicCamera(camera) {
	    return camera.isOrthographicCamera;
	}

	const PI_2 = Math.PI * 2;
	const PI_HALF = Math.PI / 2;

	const EPSILON = 1e-5;
	function approxZero(number, error = EPSILON) {
	    return Math.abs(number) < error;
	}
	function approxEquals(a, b, error = EPSILON) {
	    return approxZero(a - b, error);
	}
	function roundToStep(value, step) {
	    return Math.round(value / step) * step;
	}
	function infinityToMaxNumber(value) {
	    if (isFinite(value))
	        return value;
	    if (value < 0)
	        return -Number.MAX_VALUE;
	    return Number.MAX_VALUE;
	}
	function maxNumberToInfinity(value) {
	    if (Math.abs(value) < Number.MAX_VALUE)
	        return value;
	    return value * Infinity;
	}

	function extractClientCoordFromEvent(pointers, out) {
	    out.set(0, 0);
	    pointers.forEach((pointer) => {
	        out.x += pointer.clientX;
	        out.y += pointer.clientY;
	    });
	    out.x /= pointers.length;
	    out.y /= pointers.length;
	}

	function notSupportedInOrthographicCamera(camera, message) {
	    if (isOrthographicCamera(camera)) {
	        console.warn(`${message} is not supported in OrthographicCamera`);
	        return true;
	    }
	    return false;
	}

	function quatInvertCompat(target) {
	    if (target.invert) {
	        target.invert();
	    }
	    else {
	        target.inverse();
	    }
	    return target;
	}

	class EventDispatcher {
	    constructor() {
	        this._listeners = {};
	    }
	    addEventListener(type, listener) {
	        const listeners = this._listeners;
	        if (listeners[type] === undefined)
	            listeners[type] = [];
	        if (listeners[type].indexOf(listener) === -1)
	            listeners[type].push(listener);
	    }
	    removeEventListener(type, listener) {
	        const listeners = this._listeners;
	        const listenerArray = listeners[type];
	        if (listenerArray !== undefined) {
	            const index = listenerArray.indexOf(listener);
	            if (index !== -1)
	                listenerArray.splice(index, 1);
	        }
	    }
	    removeAllEventListeners(type) {
	        if (!type) {
	            this._listeners = {};
	            return;
	        }
	        if (Array.isArray(this._listeners[type]))
	            this._listeners[type].length = 0;
	    }
	    dispatchEvent(event) {
	        const listeners = this._listeners;
	        const listenerArray = listeners[event.type];
	        if (listenerArray !== undefined) {
	            event.target = this;
	            const array = listenerArray.slice(0);
	            for (let i = 0, l = array.length; i < l; i++) {
	                array[i].call(this, event);
	            }
	        }
	    }
	}

	const isBrowser = typeof window !== 'undefined';
	const isMac = isBrowser && /Mac/.test(navigator.platform);
	const isPointerEventsNotSupported = !(isBrowser && 'PointerEvent' in window);
	const readonlyACTION = Object.freeze(ACTION);
	const TOUCH_DOLLY_FACTOR = 1 / 8;
	let THREE$1;
	let _ORIGIN;
	let _AXIS_Y;
	let _AXIS_Z;
	let _v2;
	let _v3A;
	let _v3B;
	let _v3C;
	let _xColumn;
	let _yColumn;
	let _zColumn;
	let _sphericalA;
	let _sphericalB;
	let _box3A;
	let _box3B;
	let _sphere;
	let _quaternionA;
	let _quaternionB;
	let _rotationMatrix;
	let _raycaster;
	class CameraControls extends EventDispatcher {
	    constructor(camera, domElement) {
	        super();
	        this.minPolarAngle = 0;
	        this.maxPolarAngle = Math.PI;
	        this.minAzimuthAngle = -Infinity;
	        this.maxAzimuthAngle = Infinity;
	        this.minDistance = 0;
	        this.maxDistance = Infinity;
	        this.infinityDolly = false;
	        this.minZoom = 0.01;
	        this.maxZoom = Infinity;
	        this.dampingFactor = 0.05;
	        this.draggingDampingFactor = 0.25;
	        this.azimuthRotateSpeed = 1.0;
	        this.polarRotateSpeed = 1.0;
	        this.dollySpeed = 1.0;
	        this.truckSpeed = 2.0;
	        this.dollyToCursor = false;
	        this.dragToOffset = false;
	        this.verticalDragToForward = false;
	        this.boundaryFriction = 0.0;
	        this.restThreshold = 0.01;
	        this.colliderMeshes = [];
	        this.cancel = () => { };
	        this._enabled = true;
	        this._state = ACTION.NONE;
	        this._viewport = null;
	        this._dollyControlAmount = 0;
	        this._hasRested = true;
	        this._boundaryEnclosesCamera = false;
	        this._needsUpdate = true;
	        this._updatedLastTime = false;
	        this._elementRect = new DOMRect();
	        this._activePointers = [];
	        this._truckInternal = (deltaX, deltaY, dragToOffset) => {
	            if (isPerspectiveCamera(this._camera)) {
	                const offset = _v3A.copy(this._camera.position).sub(this._target);
	                const fov = this._camera.getEffectiveFOV() * THREE$1.MathUtils.DEG2RAD;
	                const targetDistance = offset.length() * Math.tan(fov * 0.5);
	                const truckX = (this.truckSpeed * deltaX * targetDistance / this._elementRect.height);
	                const pedestalY = (this.truckSpeed * deltaY * targetDistance / this._elementRect.height);
	                if (this.verticalDragToForward) {
	                    dragToOffset ?
	                        this.setFocalOffset(this._focalOffsetEnd.x + truckX, this._focalOffsetEnd.y, this._focalOffsetEnd.z, true) :
	                        this.truck(truckX, 0, true);
	                    this.forward(-pedestalY, true);
	                }
	                else {
	                    dragToOffset ?
	                        this.setFocalOffset(this._focalOffsetEnd.x + truckX, this._focalOffsetEnd.y + pedestalY, this._focalOffsetEnd.z, true) :
	                        this.truck(truckX, pedestalY, true);
	                }
	            }
	            else if (isOrthographicCamera(this._camera)) {
	                const camera = this._camera;
	                const truckX = deltaX * (camera.right - camera.left) / camera.zoom / this._elementRect.width;
	                const pedestalY = deltaY * (camera.top - camera.bottom) / camera.zoom / this._elementRect.height;
	                dragToOffset ?
	                    this.setFocalOffset(this._focalOffsetEnd.x + truckX, this._focalOffsetEnd.y + pedestalY, this._focalOffsetEnd.z, true) :
	                    this.truck(truckX, pedestalY, true);
	            }
	        };
	        this._rotateInternal = (deltaX, deltaY) => {
	            const theta = PI_2 * this.azimuthRotateSpeed * deltaX / this._elementRect.height;
	            const phi = PI_2 * this.polarRotateSpeed * deltaY / this._elementRect.height;
	            this.rotate(theta, phi, true);
	        };
	        this._dollyInternal = (delta, x, y) => {
	            const dollyScale = Math.pow(0.95, -delta * this.dollySpeed);
	            const distance = this._sphericalEnd.radius * dollyScale;
	            const prevRadius = this._sphericalEnd.radius;
	            const signedPrevRadius = prevRadius * (delta >= 0 ? -1 : 1);
	            this.dollyTo(distance);
	            if (this.infinityDolly && (distance < this.minDistance || this.maxDistance === this.minDistance)) {
	                this._camera.getWorldDirection(_v3A);
	                this._targetEnd.add(_v3A.normalize().multiplyScalar(signedPrevRadius));
	                this._target.add(_v3A.normalize().multiplyScalar(signedPrevRadius));
	            }
	            if (this.dollyToCursor) {
	                this._dollyControlAmount += this._sphericalEnd.radius - prevRadius;
	                if (this.infinityDolly && (distance < this.minDistance || this.maxDistance === this.minDistance)) {
	                    this._dollyControlAmount -= signedPrevRadius;
	                }
	                this._dollyControlCoord.set(x, y);
	            }
	            return;
	        };
	        this._zoomInternal = (delta, x, y) => {
	            const zoomScale = Math.pow(0.95, delta * this.dollySpeed);
	            this.zoomTo(this._zoom * zoomScale);
	            if (this.dollyToCursor) {
	                this._dollyControlAmount = this._zoomEnd;
	                this._dollyControlCoord.set(x, y);
	            }
	            return;
	        };
	        if (typeof THREE$1 === 'undefined') {
	            console.error('camera-controls: `THREE` is undefined. You must first run `CameraControls.install( { THREE: THREE } )`. Check the docs for further information.');
	        }
	        this._camera = camera;
	        this._yAxisUpSpace = new THREE$1.Quaternion().setFromUnitVectors(this._camera.up, _AXIS_Y);
	        this._yAxisUpSpaceInverse = quatInvertCompat(this._yAxisUpSpace.clone());
	        this._state = ACTION.NONE;
	        this._domElement = domElement;
	        this._domElement.style.touchAction = 'none';
	        this._domElement.style.userSelect = 'none';
	        this._domElement.style.webkitUserSelect = 'none';
	        this._target = new THREE$1.Vector3();
	        this._targetEnd = this._target.clone();
	        this._focalOffset = new THREE$1.Vector3();
	        this._focalOffsetEnd = this._focalOffset.clone();
	        this._spherical = new THREE$1.Spherical().setFromVector3(_v3A.copy(this._camera.position).applyQuaternion(this._yAxisUpSpace));
	        this._sphericalEnd = this._spherical.clone();
	        this._zoom = this._camera.zoom;
	        this._zoomEnd = this._zoom;
	        this._nearPlaneCorners = [
	            new THREE$1.Vector3(),
	            new THREE$1.Vector3(),
	            new THREE$1.Vector3(),
	            new THREE$1.Vector3(),
	        ];
	        this._updateNearPlaneCorners();
	        this._boundary = new THREE$1.Box3(new THREE$1.Vector3(-Infinity, -Infinity, -Infinity), new THREE$1.Vector3(Infinity, Infinity, Infinity));
	        this._target0 = this._target.clone();
	        this._position0 = this._camera.position.clone();
	        this._zoom0 = this._zoom;
	        this._focalOffset0 = this._focalOffset.clone();
	        this._dollyControlAmount = 0;
	        this._dollyControlCoord = new THREE$1.Vector2();
	        this.mouseButtons = {
	            left: ACTION.ROTATE,
	            middle: ACTION.DOLLY,
	            right: ACTION.TRUCK,
	            wheel: isPerspectiveCamera(this._camera) ? ACTION.DOLLY :
	                isOrthographicCamera(this._camera) ? ACTION.ZOOM :
	                    ACTION.NONE,
	            shiftLeft: ACTION.NONE,
	        };
	        this.touches = {
	            one: ACTION.TOUCH_ROTATE,
	            two: isPerspectiveCamera(this._camera) ? ACTION.TOUCH_DOLLY_TRUCK :
	                isOrthographicCamera(this._camera) ? ACTION.TOUCH_ZOOM_TRUCK :
	                    ACTION.NONE,
	            three: ACTION.TOUCH_TRUCK,
	        };
	        if (this._domElement) {
	            const dragStartPosition = new THREE$1.Vector2();
	            const lastDragPosition = new THREE$1.Vector2();
	            const dollyStart = new THREE$1.Vector2();
	            const onPointerDown = (event) => {
	                if (!this._enabled)
	                    return;
	                const pointer = {
	                    pointerId: event.pointerId,
	                    clientX: event.clientX,
	                    clientY: event.clientY,
	                };
	                this._activePointers.push(pointer);
	                switch (event.button) {
	                    case THREE$1.MOUSE.LEFT:
	                        this._state = event.shiftKey ? this.mouseButtons.shiftLeft : this.mouseButtons.left;
	                        break;
	                    case THREE$1.MOUSE.MIDDLE:
	                        this._state = this.mouseButtons.middle;
	                        break;
	                    case THREE$1.MOUSE.RIGHT:
	                        this._state = this.mouseButtons.right;
	                        break;
	                }
	                if (event.pointerType === 'touch') {
	                    switch (this._activePointers.length) {
	                        case 1:
	                            this._state = this.touches.one;
	                            break;
	                        case 2:
	                            this._state = this.touches.two;
	                            break;
	                        case 3:
	                            this._state = this.touches.three;
	                            break;
	                    }
	                }
	                this._domElement.ownerDocument.removeEventListener('pointermove', onPointerMove, { passive: false });
	                this._domElement.ownerDocument.removeEventListener('pointerup', onPointerUp);
	                this._domElement.ownerDocument.addEventListener('pointermove', onPointerMove, { passive: false });
	                this._domElement.ownerDocument.addEventListener('pointerup', onPointerUp);
	                startDragging();
	            };
	            const onMouseDown = (event) => {
	                if (!this._enabled)
	                    return;
	                const pointer = {
	                    pointerId: 0,
	                    clientX: event.clientX,
	                    clientY: event.clientY,
	                };
	                this._activePointers.push(pointer);
	                switch (event.button) {
	                    case THREE$1.MOUSE.LEFT:
	                        this._state = event.shiftKey ? this.mouseButtons.shiftLeft : this.mouseButtons.left;
	                        break;
	                    case THREE$1.MOUSE.MIDDLE:
	                        this._state = this.mouseButtons.middle;
	                        break;
	                    case THREE$1.MOUSE.RIGHT:
	                        this._state = this.mouseButtons.right;
	                        break;
	                }
	                this._domElement.ownerDocument.removeEventListener('mousemove', onMouseMove);
	                this._domElement.ownerDocument.removeEventListener('mouseup', onMouseUp);
	                this._domElement.ownerDocument.addEventListener('mousemove', onMouseMove);
	                this._domElement.ownerDocument.addEventListener('mouseup', onMouseUp);
	                startDragging();
	            };
	            const onTouchStart = (event) => {
	                if (!this._enabled)
	                    return;
	                event.preventDefault();
	                Array.prototype.forEach.call(event.changedTouches, (touch) => {
	                    const pointer = {
	                        pointerId: touch.identifier,
	                        clientX: touch.clientX,
	                        clientY: touch.clientY,
	                    };
	                    this._activePointers.push(pointer);
	                });
	                switch (this._activePointers.length) {
	                    case 1:
	                        this._state = this.touches.one;
	                        break;
	                    case 2:
	                        this._state = this.touches.two;
	                        break;
	                    case 3:
	                        this._state = this.touches.three;
	                        break;
	                }
	                this._domElement.ownerDocument.removeEventListener('touchmove', onTouchMove, { passive: false });
	                this._domElement.ownerDocument.removeEventListener('touchend', onTouchEnd);
	                this._domElement.ownerDocument.addEventListener('touchmove', onTouchMove, { passive: false });
	                this._domElement.ownerDocument.addEventListener('touchend', onTouchEnd);
	                startDragging();
	            };
	            const onPointerMove = (event) => {
	                if (event.cancelable)
	                    event.preventDefault();
	                const pointerId = event.pointerId;
	                const pointer = this._findPointerById(pointerId);
	                if (!pointer)
	                    return;
	                pointer.clientX = event.clientX;
	                pointer.clientY = event.clientY;
	                dragging();
	            };
	            const onMouseMove = (event) => {
	                const pointer = this._findPointerById(0);
	                if (!pointer)
	                    return;
	                pointer.clientX = event.clientX;
	                pointer.clientY = event.clientY;
	                dragging();
	            };
	            const onTouchMove = (event) => {
	                if (event.cancelable)
	                    event.preventDefault();
	                Array.prototype.forEach.call(event.changedTouches, (touch) => {
	                    const pointerId = touch.identifier;
	                    const pointer = this._findPointerById(pointerId);
	                    if (!pointer)
	                        return;
	                    pointer.clientX = touch.clientX;
	                    pointer.clientY = touch.clientY;
	                });
	                dragging();
	            };
	            const onPointerUp = (event) => {
	                const pointerId = event.pointerId;
	                const pointer = this._findPointerById(pointerId);
	                pointer && this._activePointers.splice(this._activePointers.indexOf(pointer), 1);
	                if (event.pointerType === 'touch') {
	                    switch (this._activePointers.length) {
	                        case 0:
	                            this._state = ACTION.NONE;
	                            break;
	                        case 1:
	                            this._state = this.touches.one;
	                            break;
	                        case 2:
	                            this._state = this.touches.two;
	                            break;
	                        case 3:
	                            this._state = this.touches.three;
	                            break;
	                    }
	                }
	                else {
	                    this._state = ACTION.NONE;
	                }
	                endDragging();
	            };
	            const onMouseUp = () => {
	                const pointer = this._findPointerById(0);
	                pointer && this._activePointers.splice(this._activePointers.indexOf(pointer), 1);
	                this._state = ACTION.NONE;
	                endDragging();
	            };
	            const onTouchEnd = (event) => {
	                Array.prototype.forEach.call(event.changedTouches, (touch) => {
	                    const pointerId = touch.identifier;
	                    const pointer = this._findPointerById(pointerId);
	                    pointer && this._activePointers.splice(this._activePointers.indexOf(pointer), 1);
	                });
	                switch (this._activePointers.length) {
	                    case 0:
	                        this._state = ACTION.NONE;
	                        break;
	                    case 1:
	                        this._state = this.touches.one;
	                        break;
	                    case 2:
	                        this._state = this.touches.two;
	                        break;
	                    case 3:
	                        this._state = this.touches.three;
	                        break;
	                }
	                endDragging();
	            };
	            let lastScrollTimeStamp = -1;
	            const onMouseWheel = (event) => {
	                if (!this._enabled || this.mouseButtons.wheel === ACTION.NONE)
	                    return;
	                event.preventDefault();
	                if (this.dollyToCursor ||
	                    this.mouseButtons.wheel === ACTION.ROTATE ||
	                    this.mouseButtons.wheel === ACTION.TRUCK) {
	                    const now = performance.now();
	                    if (lastScrollTimeStamp - now < 1000)
	                        this._getClientRect(this._elementRect);
	                    lastScrollTimeStamp = now;
	                }
	                const deltaYFactor = isMac ? -1 : -3;
	                const delta = (event.deltaMode === 1) ? event.deltaY / deltaYFactor : event.deltaY / (deltaYFactor * 10);
	                const x = this.dollyToCursor ? (event.clientX - this._elementRect.x) / this._elementRect.width * 2 - 1 : 0;
	                const y = this.dollyToCursor ? (event.clientY - this._elementRect.y) / this._elementRect.height * -2 + 1 : 0;
	                switch (this.mouseButtons.wheel) {
	                    case ACTION.ROTATE: {
	                        this._rotateInternal(event.deltaX, event.deltaY);
	                        break;
	                    }
	                    case ACTION.TRUCK: {
	                        this._truckInternal(event.deltaX, event.deltaY, false);
	                        break;
	                    }
	                    case ACTION.OFFSET: {
	                        this._truckInternal(event.deltaX, event.deltaY, true);
	                        break;
	                    }
	                    case ACTION.DOLLY: {
	                        this._dollyInternal(-delta, x, y);
	                        break;
	                    }
	                    case ACTION.ZOOM: {
	                        this._zoomInternal(-delta, x, y);
	                        break;
	                    }
	                }
	                this.dispatchEvent({ type: 'control' });
	            };
	            const onContextMenu = (event) => {
	                if (!this._enabled)
	                    return;
	                event.preventDefault();
	            };
	            const startDragging = () => {
	                if (!this._enabled)
	                    return;
	                extractClientCoordFromEvent(this._activePointers, _v2);
	                this._getClientRect(this._elementRect);
	                dragStartPosition.copy(_v2);
	                lastDragPosition.copy(_v2);
	                const isMultiTouch = this._activePointers.length >= 2;
	                if (isMultiTouch) {
	                    const dx = _v2.x - this._activePointers[1].clientX;
	                    const dy = _v2.y - this._activePointers[1].clientY;
	                    const distance = Math.sqrt(dx * dx + dy * dy);
	                    dollyStart.set(0, distance);
	                    const x = (this._activePointers[0].clientX + this._activePointers[1].clientX) * 0.5;
	                    const y = (this._activePointers[0].clientY + this._activePointers[1].clientY) * 0.5;
	                    lastDragPosition.set(x, y);
	                }
	                this.dispatchEvent({ type: 'controlstart' });
	            };
	            const dragging = () => {
	                if (!this._enabled)
	                    return;
	                extractClientCoordFromEvent(this._activePointers, _v2);
	                const deltaX = lastDragPosition.x - _v2.x;
	                const deltaY = lastDragPosition.y - _v2.y;
	                lastDragPosition.copy(_v2);
	                switch (this._state) {
	                    case ACTION.ROTATE:
	                    case ACTION.TOUCH_ROTATE: {
	                        this._rotateInternal(deltaX, deltaY);
	                        break;
	                    }
	                    case ACTION.DOLLY:
	                    case ACTION.ZOOM: {
	                        const dollyX = this.dollyToCursor ? (dragStartPosition.x - this._elementRect.x) / this._elementRect.width * 2 - 1 : 0;
	                        const dollyY = this.dollyToCursor ? (dragStartPosition.y - this._elementRect.y) / this._elementRect.height * -2 + 1 : 0;
	                        this._state === ACTION.DOLLY ?
	                            this._dollyInternal(deltaY * TOUCH_DOLLY_FACTOR, dollyX, dollyY) :
	                            this._zoomInternal(deltaY * TOUCH_DOLLY_FACTOR, dollyX, dollyY);
	                        break;
	                    }
	                    case ACTION.TOUCH_DOLLY:
	                    case ACTION.TOUCH_ZOOM:
	                    case ACTION.TOUCH_DOLLY_TRUCK:
	                    case ACTION.TOUCH_ZOOM_TRUCK:
	                    case ACTION.TOUCH_DOLLY_OFFSET:
	                    case ACTION.TOUCH_ZOOM_OFFSET: {
	                        const dx = _v2.x - this._activePointers[1].clientX;
	                        const dy = _v2.y - this._activePointers[1].clientY;
	                        const distance = Math.sqrt(dx * dx + dy * dy);
	                        const dollyDelta = dollyStart.y - distance;
	                        dollyStart.set(0, distance);
	                        const dollyX = this.dollyToCursor ? (lastDragPosition.x - this._elementRect.x) / this._elementRect.width * 2 - 1 : 0;
	                        const dollyY = this.dollyToCursor ? (lastDragPosition.y - this._elementRect.y) / this._elementRect.height * -2 + 1 : 0;
	                        this._state === ACTION.TOUCH_DOLLY ||
	                            this._state === ACTION.TOUCH_DOLLY_TRUCK ||
	                            this._state === ACTION.TOUCH_DOLLY_OFFSET ?
	                            this._dollyInternal(dollyDelta * TOUCH_DOLLY_FACTOR, dollyX, dollyY) :
	                            this._zoomInternal(dollyDelta * TOUCH_DOLLY_FACTOR, dollyX, dollyY);
	                        if (this._state === ACTION.TOUCH_DOLLY_TRUCK ||
	                            this._state === ACTION.TOUCH_ZOOM_TRUCK) {
	                            this._truckInternal(deltaX, deltaY, false);
	                        }
	                        else if (this._state === ACTION.TOUCH_DOLLY_OFFSET ||
	                            this._state === ACTION.TOUCH_ZOOM_OFFSET) {
	                            this._truckInternal(deltaX, deltaY, true);
	                        }
	                        break;
	                    }
	                    case ACTION.TRUCK:
	                    case ACTION.TOUCH_TRUCK: {
	                        this._truckInternal(deltaX, deltaY, false);
	                        break;
	                    }
	                    case ACTION.OFFSET:
	                    case ACTION.TOUCH_OFFSET: {
	                        this._truckInternal(deltaX, deltaY, true);
	                        break;
	                    }
	                }
	                this.dispatchEvent({ type: 'control' });
	            };
	            const endDragging = () => {
	                extractClientCoordFromEvent(this._activePointers, _v2);
	                lastDragPosition.copy(_v2);
	                if (this._activePointers.length === 0) {
	                    this._domElement.ownerDocument.removeEventListener('pointermove', onPointerMove, { passive: false });
	                    this._domElement.ownerDocument.removeEventListener('pointerup', onPointerUp);
	                    this._domElement.ownerDocument.removeEventListener('touchmove', onTouchMove, { passive: false });
	                    this._domElement.ownerDocument.removeEventListener('touchend', onTouchEnd);
	                    this.dispatchEvent({ type: 'controlend' });
	                }
	            };
	            this._domElement.addEventListener('pointerdown', onPointerDown);
	            isPointerEventsNotSupported && this._domElement.addEventListener('mousedown', onMouseDown);
	            isPointerEventsNotSupported && this._domElement.addEventListener('touchstart', onTouchStart);
	            this._domElement.addEventListener('pointercancel', onPointerUp);
	            this._domElement.addEventListener('wheel', onMouseWheel, { passive: false });
	            this._domElement.addEventListener('contextmenu', onContextMenu);
	            this._removeAllEventListeners = () => {
	                this._domElement.removeEventListener('pointerdown', onPointerDown);
	                this._domElement.removeEventListener('mousedown', onMouseDown);
	                this._domElement.removeEventListener('touchstart', onTouchStart);
	                this._domElement.removeEventListener('pointercancel', onPointerUp);
	                this._domElement.removeEventListener('wheel', onMouseWheel, { passive: false });
	                this._domElement.removeEventListener('contextmenu', onContextMenu);
	                this._domElement.ownerDocument.removeEventListener('pointermove', onPointerMove, { passive: false });
	                this._domElement.ownerDocument.removeEventListener('mousemove', onMouseMove);
	                this._domElement.ownerDocument.removeEventListener('touchmove', onTouchMove, { passive: false });
	                this._domElement.ownerDocument.removeEventListener('pointerup', onPointerUp);
	                this._domElement.ownerDocument.removeEventListener('mouseup', onMouseUp);
	                this._domElement.ownerDocument.removeEventListener('touchend', onTouchEnd);
	            };
	            this.cancel = () => {
	                if (this._state === ACTION.NONE)
	                    return;
	                this._state = ACTION.NONE;
	                this._activePointers.length = 0;
	                endDragging();
	            };
	        }
	        this.update(0);
	    }
	    static install(libs) {
	        THREE$1 = libs.THREE;
	        _ORIGIN = Object.freeze(new THREE$1.Vector3(0, 0, 0));
	        _AXIS_Y = Object.freeze(new THREE$1.Vector3(0, 1, 0));
	        _AXIS_Z = Object.freeze(new THREE$1.Vector3(0, 0, 1));
	        _v2 = new THREE$1.Vector2();
	        _v3A = new THREE$1.Vector3();
	        _v3B = new THREE$1.Vector3();
	        _v3C = new THREE$1.Vector3();
	        _xColumn = new THREE$1.Vector3();
	        _yColumn = new THREE$1.Vector3();
	        _zColumn = new THREE$1.Vector3();
	        _sphericalA = new THREE$1.Spherical();
	        _sphericalB = new THREE$1.Spherical();
	        _box3A = new THREE$1.Box3();
	        _box3B = new THREE$1.Box3();
	        _sphere = new THREE$1.Sphere();
	        _quaternionA = new THREE$1.Quaternion();
	        _quaternionB = new THREE$1.Quaternion();
	        _rotationMatrix = new THREE$1.Matrix4();
	        _raycaster = new THREE$1.Raycaster();
	    }
	    static get ACTION() {
	        return readonlyACTION;
	    }
	    get camera() {
	        return this._camera;
	    }
	    set camera(camera) {
	        this._camera = camera;
	        this.updateCameraUp();
	        this._camera.updateProjectionMatrix();
	        this._updateNearPlaneCorners();
	        this._needsUpdate = true;
	    }
	    get enabled() {
	        return this._enabled;
	    }
	    set enabled(enabled) {
	        this._enabled = enabled;
	        if (enabled) {
	            this._domElement.style.touchAction = 'none';
	            this._domElement.style.userSelect = 'none';
	            this._domElement.style.webkitUserSelect = 'none';
	        }
	        else {
	            this.cancel();
	            this._domElement.style.touchAction = '';
	            this._domElement.style.userSelect = '';
	            this._domElement.style.webkitUserSelect = '';
	        }
	    }
	    get active() {
	        return !this._hasRested;
	    }
	    get currentAction() {
	        return this._state;
	    }
	    get distance() {
	        return this._spherical.radius;
	    }
	    set distance(distance) {
	        if (this._spherical.radius === distance &&
	            this._sphericalEnd.radius === distance)
	            return;
	        this._spherical.radius = distance;
	        this._sphericalEnd.radius = distance;
	        this._needsUpdate = true;
	    }
	    get azimuthAngle() {
	        return this._spherical.theta;
	    }
	    set azimuthAngle(azimuthAngle) {
	        if (this._spherical.theta === azimuthAngle &&
	            this._sphericalEnd.theta === azimuthAngle)
	            return;
	        this._spherical.theta = azimuthAngle;
	        this._sphericalEnd.theta = azimuthAngle;
	        this._needsUpdate = true;
	    }
	    get polarAngle() {
	        return this._spherical.phi;
	    }
	    set polarAngle(polarAngle) {
	        if (this._spherical.phi === polarAngle &&
	            this._sphericalEnd.phi === polarAngle)
	            return;
	        this._spherical.phi = polarAngle;
	        this._sphericalEnd.phi = polarAngle;
	        this._needsUpdate = true;
	    }
	    get boundaryEnclosesCamera() {
	        return this._boundaryEnclosesCamera;
	    }
	    set boundaryEnclosesCamera(boundaryEnclosesCamera) {
	        this._boundaryEnclosesCamera = boundaryEnclosesCamera;
	        this._needsUpdate = true;
	    }
	    addEventListener(type, listener) {
	        super.addEventListener(type, listener);
	    }
	    removeEventListener(type, listener) {
	        super.removeEventListener(type, listener);
	    }
	    rotate(azimuthAngle, polarAngle, enableTransition = false) {
	        return this.rotateTo(this._sphericalEnd.theta + azimuthAngle, this._sphericalEnd.phi + polarAngle, enableTransition);
	    }
	    rotateAzimuthTo(azimuthAngle, enableTransition = false) {
	        return this.rotateTo(azimuthAngle, this._sphericalEnd.phi, enableTransition);
	    }
	    rotatePolarTo(polarAngle, enableTransition = false) {
	        return this.rotateTo(this._sphericalEnd.theta, polarAngle, enableTransition);
	    }
	    rotateTo(azimuthAngle, polarAngle, enableTransition = false) {
	        const theta = THREE$1.MathUtils.clamp(azimuthAngle, this.minAzimuthAngle, this.maxAzimuthAngle);
	        const phi = THREE$1.MathUtils.clamp(polarAngle, this.minPolarAngle, this.maxPolarAngle);
	        this._sphericalEnd.theta = theta;
	        this._sphericalEnd.phi = phi;
	        this._sphericalEnd.makeSafe();
	        this._needsUpdate = true;
	        if (!enableTransition) {
	            this._spherical.theta = this._sphericalEnd.theta;
	            this._spherical.phi = this._sphericalEnd.phi;
	        }
	        const resolveImmediately = !enableTransition ||
	            approxEquals(this._spherical.theta, this._sphericalEnd.theta, this.restThreshold) &&
	                approxEquals(this._spherical.phi, this._sphericalEnd.phi, this.restThreshold);
	        return this._createOnRestPromise(resolveImmediately);
	    }
	    dolly(distance, enableTransition = false) {
	        return this.dollyTo(this._sphericalEnd.radius - distance, enableTransition);
	    }
	    dollyTo(distance, enableTransition = false) {
	        const lastRadius = this._sphericalEnd.radius;
	        const newRadius = THREE$1.MathUtils.clamp(distance, this.minDistance, this.maxDistance);
	        const hasCollider = this.colliderMeshes.length >= 1;
	        if (hasCollider) {
	            const maxDistanceByCollisionTest = this._collisionTest();
	            const isCollided = approxEquals(maxDistanceByCollisionTest, this._spherical.radius);
	            const isDollyIn = lastRadius > newRadius;
	            if (!isDollyIn && isCollided)
	                return Promise.resolve();
	            this._sphericalEnd.radius = Math.min(newRadius, maxDistanceByCollisionTest);
	        }
	        else {
	            this._sphericalEnd.radius = newRadius;
	        }
	        this._needsUpdate = true;
	        if (!enableTransition) {
	            this._spherical.radius = this._sphericalEnd.radius;
	        }
	        const resolveImmediately = !enableTransition || approxEquals(this._spherical.radius, this._sphericalEnd.radius, this.restThreshold);
	        return this._createOnRestPromise(resolveImmediately);
	    }
	    zoom(zoomStep, enableTransition = false) {
	        return this.zoomTo(this._zoomEnd + zoomStep, enableTransition);
	    }
	    zoomTo(zoom, enableTransition = false) {
	        this._zoomEnd = THREE$1.MathUtils.clamp(zoom, this.minZoom, this.maxZoom);
	        this._needsUpdate = true;
	        if (!enableTransition) {
	            this._zoom = this._zoomEnd;
	        }
	        const resolveImmediately = !enableTransition || approxEquals(this._zoom, this._zoomEnd, this.restThreshold);
	        return this._createOnRestPromise(resolveImmediately);
	    }
	    pan(x, y, enableTransition = false) {
	        console.warn('`pan` has been renamed to `truck`');
	        return this.truck(x, y, enableTransition);
	    }
	    truck(x, y, enableTransition = false) {
	        this._camera.updateMatrix();
	        _xColumn.setFromMatrixColumn(this._camera.matrix, 0);
	        _yColumn.setFromMatrixColumn(this._camera.matrix, 1);
	        _xColumn.multiplyScalar(x);
	        _yColumn.multiplyScalar(-y);
	        const offset = _v3A.copy(_xColumn).add(_yColumn);
	        const to = _v3B.copy(this._targetEnd).add(offset);
	        return this.moveTo(to.x, to.y, to.z, enableTransition);
	    }
	    forward(distance, enableTransition = false) {
	        _v3A.setFromMatrixColumn(this._camera.matrix, 0);
	        _v3A.crossVectors(this._camera.up, _v3A);
	        _v3A.multiplyScalar(distance);
	        const to = _v3B.copy(this._targetEnd).add(_v3A);
	        return this.moveTo(to.x, to.y, to.z, enableTransition);
	    }
	    moveTo(x, y, z, enableTransition = false) {
	        const offset = _v3A.set(x, y, z).sub(this._targetEnd);
	        this._encloseToBoundary(this._targetEnd, offset, this.boundaryFriction);
	        this._needsUpdate = true;
	        if (!enableTransition) {
	            this._target.copy(this._targetEnd);
	        }
	        const resolveImmediately = !enableTransition ||
	            approxEquals(this._target.x, this._targetEnd.x, this.restThreshold) &&
	                approxEquals(this._target.y, this._targetEnd.y, this.restThreshold) &&
	                approxEquals(this._target.z, this._targetEnd.z, this.restThreshold);
	        return this._createOnRestPromise(resolveImmediately);
	    }
	    fitToBox(box3OrObject, enableTransition, { paddingLeft = 0, paddingRight = 0, paddingBottom = 0, paddingTop = 0 } = {}) {
	        const promises = [];
	        const aabb = box3OrObject.isBox3
	            ? _box3A.copy(box3OrObject)
	            : _box3A.setFromObject(box3OrObject);
	        if (aabb.isEmpty()) {
	            console.warn('camera-controls: fitTo() cannot be used with an empty box. Aborting');
	            Promise.resolve();
	        }
	        const theta = roundToStep(this._sphericalEnd.theta, PI_HALF);
	        const phi = roundToStep(this._sphericalEnd.phi, PI_HALF);
	        promises.push(this.rotateTo(theta, phi, enableTransition));
	        const normal = _v3A.setFromSpherical(this._sphericalEnd).normalize();
	        const rotation = _quaternionA.setFromUnitVectors(normal, _AXIS_Z);
	        const viewFromPolar = approxEquals(Math.abs(normal.y), 1);
	        if (viewFromPolar) {
	            rotation.multiply(_quaternionB.setFromAxisAngle(_AXIS_Y, theta));
	        }
	        const bb = _box3B.makeEmpty();
	        _v3B.copy(aabb.min).applyQuaternion(rotation);
	        bb.expandByPoint(_v3B);
	        _v3B.copy(aabb.min).setX(aabb.max.x).applyQuaternion(rotation);
	        bb.expandByPoint(_v3B);
	        _v3B.copy(aabb.min).setY(aabb.max.y).applyQuaternion(rotation);
	        bb.expandByPoint(_v3B);
	        _v3B.copy(aabb.max).setZ(aabb.min.z).applyQuaternion(rotation);
	        bb.expandByPoint(_v3B);
	        _v3B.copy(aabb.min).setZ(aabb.max.z).applyQuaternion(rotation);
	        bb.expandByPoint(_v3B);
	        _v3B.copy(aabb.max).setY(aabb.min.y).applyQuaternion(rotation);
	        bb.expandByPoint(_v3B);
	        _v3B.copy(aabb.max).setX(aabb.min.x).applyQuaternion(rotation);
	        bb.expandByPoint(_v3B);
	        _v3B.copy(aabb.max).applyQuaternion(rotation);
	        bb.expandByPoint(_v3B);
	        rotation.setFromUnitVectors(_AXIS_Z, normal);
	        bb.min.x -= paddingLeft;
	        bb.min.y -= paddingBottom;
	        bb.max.x += paddingRight;
	        bb.max.y += paddingTop;
	        const bbSize = bb.getSize(_v3A);
	        const center = bb.getCenter(_v3B).applyQuaternion(rotation);
	        if (isPerspectiveCamera(this._camera)) {
	            const distance = this.getDistanceToFitBox(bbSize.x, bbSize.y, bbSize.z);
	            promises.push(this.moveTo(center.x, center.y, center.z, enableTransition));
	            promises.push(this.dollyTo(distance, enableTransition));
	            promises.push(this.setFocalOffset(0, 0, 0, enableTransition));
	        }
	        else if (isOrthographicCamera(this._camera)) {
	            const camera = this._camera;
	            const width = camera.right - camera.left;
	            const height = camera.top - camera.bottom;
	            const zoom = Math.min(width / bbSize.x, height / bbSize.y);
	            promises.push(this.moveTo(center.x, center.y, center.z, enableTransition));
	            promises.push(this.zoomTo(zoom, enableTransition));
	            promises.push(this.setFocalOffset(0, 0, 0, enableTransition));
	        }
	        return Promise.all(promises);
	    }
	    fitTo(box3OrObject, enableTransition, fitToOptions = {}) {
	        console.warn('camera-controls: fitTo() has been renamed to fitToBox()');
	        return this.fitToBox(box3OrObject, enableTransition, fitToOptions);
	    }
	    fitToSphere(sphereOrMesh, enableTransition) {
	        const promises = [];
	        const isSphere = sphereOrMesh instanceof THREE$1.Sphere;
	        const boundingSphere = isSphere ?
	            _sphere.copy(sphereOrMesh) :
	            createBoundingSphere(sphereOrMesh, _sphere);
	        promises.push(this.moveTo(boundingSphere.center.x, boundingSphere.center.y, boundingSphere.center.z, enableTransition));
	        if (isPerspectiveCamera(this._camera)) {
	            const distanceToFit = this.getDistanceToFitSphere(boundingSphere.radius);
	            promises.push(this.dollyTo(distanceToFit, enableTransition));
	        }
	        else if (isOrthographicCamera(this._camera)) {
	            const width = this._camera.right - this._camera.left;
	            const height = this._camera.top - this._camera.bottom;
	            const diameter = 2 * boundingSphere.radius;
	            const zoom = Math.min(width / diameter, height / diameter);
	            promises.push(this.zoomTo(zoom, enableTransition));
	        }
	        promises.push(this.setFocalOffset(0, 0, 0, enableTransition));
	        return Promise.all(promises);
	    }
	    setLookAt(positionX, positionY, positionZ, targetX, targetY, targetZ, enableTransition = false) {
	        const target = _v3B.set(targetX, targetY, targetZ);
	        const position = _v3A.set(positionX, positionY, positionZ);
	        this._targetEnd.copy(target);
	        this._sphericalEnd.setFromVector3(position.sub(target).applyQuaternion(this._yAxisUpSpace));
	        this.normalizeRotations();
	        this._needsUpdate = true;
	        if (!enableTransition) {
	            this._target.copy(this._targetEnd);
	            this._spherical.copy(this._sphericalEnd);
	        }
	        const resolveImmediately = !enableTransition ||
	            approxEquals(this._target.x, this._targetEnd.x, this.restThreshold) &&
	                approxEquals(this._target.y, this._targetEnd.y, this.restThreshold) &&
	                approxEquals(this._target.z, this._targetEnd.z, this.restThreshold) &&
	                approxEquals(this._spherical.theta, this._sphericalEnd.theta, this.restThreshold) &&
	                approxEquals(this._spherical.phi, this._sphericalEnd.phi, this.restThreshold) &&
	                approxEquals(this._spherical.radius, this._sphericalEnd.radius, this.restThreshold);
	        return this._createOnRestPromise(resolveImmediately);
	    }
	    lerpLookAt(positionAX, positionAY, positionAZ, targetAX, targetAY, targetAZ, positionBX, positionBY, positionBZ, targetBX, targetBY, targetBZ, t, enableTransition = false) {
	        const targetA = _v3A.set(targetAX, targetAY, targetAZ);
	        const positionA = _v3B.set(positionAX, positionAY, positionAZ);
	        _sphericalA.setFromVector3(positionA.sub(targetA).applyQuaternion(this._yAxisUpSpace));
	        const targetB = _v3C.set(targetBX, targetBY, targetBZ);
	        const positionB = _v3B.set(positionBX, positionBY, positionBZ);
	        _sphericalB.setFromVector3(positionB.sub(targetB).applyQuaternion(this._yAxisUpSpace));
	        this._targetEnd.copy(targetA.lerp(targetB, t));
	        const deltaTheta = _sphericalB.theta - _sphericalA.theta;
	        const deltaPhi = _sphericalB.phi - _sphericalA.phi;
	        const deltaRadius = _sphericalB.radius - _sphericalA.radius;
	        this._sphericalEnd.set(_sphericalA.radius + deltaRadius * t, _sphericalA.phi + deltaPhi * t, _sphericalA.theta + deltaTheta * t);
	        this.normalizeRotations();
	        this._needsUpdate = true;
	        if (!enableTransition) {
	            this._target.copy(this._targetEnd);
	            this._spherical.copy(this._sphericalEnd);
	        }
	        const resolveImmediately = !enableTransition ||
	            approxEquals(this._target.x, this._targetEnd.x, this.restThreshold) &&
	                approxEquals(this._target.y, this._targetEnd.y, this.restThreshold) &&
	                approxEquals(this._target.z, this._targetEnd.z, this.restThreshold) &&
	                approxEquals(this._spherical.theta, this._sphericalEnd.theta, this.restThreshold) &&
	                approxEquals(this._spherical.phi, this._sphericalEnd.phi, this.restThreshold) &&
	                approxEquals(this._spherical.radius, this._sphericalEnd.radius, this.restThreshold);
	        return this._createOnRestPromise(resolveImmediately);
	    }
	    setPosition(positionX, positionY, positionZ, enableTransition = false) {
	        return this.setLookAt(positionX, positionY, positionZ, this._targetEnd.x, this._targetEnd.y, this._targetEnd.z, enableTransition);
	    }
	    setTarget(targetX, targetY, targetZ, enableTransition = false) {
	        const pos = this.getPosition(_v3A);
	        return this.setLookAt(pos.x, pos.y, pos.z, targetX, targetY, targetZ, enableTransition);
	    }
	    setFocalOffset(x, y, z, enableTransition = false) {
	        this._focalOffsetEnd.set(x, y, z);
	        this._needsUpdate = true;
	        if (!enableTransition) {
	            this._focalOffset.copy(this._focalOffsetEnd);
	        }
	        const resolveImmediately = !enableTransition ||
	            approxEquals(this._focalOffset.x, this._focalOffsetEnd.x, this.restThreshold) &&
	                approxEquals(this._focalOffset.y, this._focalOffsetEnd.y, this.restThreshold) &&
	                approxEquals(this._focalOffset.z, this._focalOffsetEnd.z, this.restThreshold);
	        return this._createOnRestPromise(resolveImmediately);
	    }
	    setOrbitPoint(targetX, targetY, targetZ) {
	        _xColumn.setFromMatrixColumn(this._camera.matrixWorldInverse, 0);
	        _yColumn.setFromMatrixColumn(this._camera.matrixWorldInverse, 1);
	        _zColumn.setFromMatrixColumn(this._camera.matrixWorldInverse, 2);
	        const position = _v3A.set(targetX, targetY, targetZ);
	        const distance = position.distanceTo(this._camera.position);
	        const cameraToPoint = position.sub(this._camera.position);
	        _xColumn.multiplyScalar(cameraToPoint.x);
	        _yColumn.multiplyScalar(cameraToPoint.y);
	        _zColumn.multiplyScalar(cameraToPoint.z);
	        _v3A.copy(_xColumn).add(_yColumn).add(_zColumn);
	        _v3A.z = _v3A.z + distance;
	        this.dollyTo(distance, false);
	        this.setFocalOffset(-_v3A.x, _v3A.y, -_v3A.z, false);
	        this.moveTo(targetX, targetY, targetZ, false);
	    }
	    setBoundary(box3) {
	        if (!box3) {
	            this._boundary.min.set(-Infinity, -Infinity, -Infinity);
	            this._boundary.max.set(Infinity, Infinity, Infinity);
	            this._needsUpdate = true;
	            return;
	        }
	        this._boundary.copy(box3);
	        this._boundary.clampPoint(this._targetEnd, this._targetEnd);
	        this._needsUpdate = true;
	    }
	    setViewport(viewportOrX, y, width, height) {
	        if (viewportOrX === null) {
	            this._viewport = null;
	            return;
	        }
	        this._viewport = this._viewport || new THREE$1.Vector4();
	        if (typeof viewportOrX === 'number') {
	            this._viewport.set(viewportOrX, y, width, height);
	        }
	        else {
	            this._viewport.copy(viewportOrX);
	        }
	    }
	    getDistanceToFitBox(width, height, depth) {
	        if (notSupportedInOrthographicCamera(this._camera, 'getDistanceToFitBox'))
	            return this._spherical.radius;
	        const boundingRectAspect = width / height;
	        const fov = this._camera.getEffectiveFOV() * THREE$1.MathUtils.DEG2RAD;
	        const aspect = this._camera.aspect;
	        const heightToFit = boundingRectAspect < aspect ? height : width / aspect;
	        return heightToFit * 0.5 / Math.tan(fov * 0.5) + depth * 0.5;
	    }
	    getDistanceToFit(width, height, depth) {
	        console.warn('camera-controls: getDistanceToFit() has been renamed to getDistanceToFitBox()');
	        return this.getDistanceToFitBox(width, height, depth);
	    }
	    getDistanceToFitSphere(radius) {
	        if (notSupportedInOrthographicCamera(this._camera, 'getDistanceToFitSphere'))
	            return this._spherical.radius;
	        const vFOV = this._camera.getEffectiveFOV() * THREE$1.MathUtils.DEG2RAD;
	        const hFOV = Math.atan(Math.tan(vFOV * 0.5) * this._camera.aspect) * 2;
	        const fov = 1 < this._camera.aspect ? vFOV : hFOV;
	        return radius / (Math.sin(fov * 0.5));
	    }
	    getTarget(out) {
	        const _out = !!out && out.isVector3 ? out : new THREE$1.Vector3();
	        return _out.copy(this._targetEnd);
	    }
	    getPosition(out) {
	        const _out = !!out && out.isVector3 ? out : new THREE$1.Vector3();
	        return _out.setFromSpherical(this._sphericalEnd).applyQuaternion(this._yAxisUpSpaceInverse).add(this._targetEnd);
	    }
	    getFocalOffset(out) {
	        const _out = !!out && out.isVector3 ? out : new THREE$1.Vector3();
	        return _out.copy(this._focalOffsetEnd);
	    }
	    normalizeRotations() {
	        this._sphericalEnd.theta = this._sphericalEnd.theta % PI_2;
	        if (this._sphericalEnd.theta < 0)
	            this._sphericalEnd.theta += PI_2;
	        this._spherical.theta += PI_2 * Math.round((this._sphericalEnd.theta - this._spherical.theta) / PI_2);
	    }
	    reset(enableTransition = false) {
	        const promises = [
	            this.setLookAt(this._position0.x, this._position0.y, this._position0.z, this._target0.x, this._target0.y, this._target0.z, enableTransition),
	            this.setFocalOffset(this._focalOffset0.x, this._focalOffset0.y, this._focalOffset0.z, enableTransition),
	            this.zoomTo(this._zoom0, enableTransition),
	        ];
	        return Promise.all(promises);
	    }
	    saveState() {
	        this._target0.copy(this._target);
	        this._position0.copy(this._camera.position);
	        this._zoom0 = this._zoom;
	    }
	    updateCameraUp() {
	        this._yAxisUpSpace.setFromUnitVectors(this._camera.up, _AXIS_Y);
	        quatInvertCompat(this._yAxisUpSpaceInverse.copy(this._yAxisUpSpace));
	    }
	    update(delta) {
	        const dampingFactor = this._state === ACTION.NONE ? this.dampingFactor : this.draggingDampingFactor;
	        const lerpRatio = Math.min(dampingFactor * delta * 60, 1);
	        const deltaTheta = this._sphericalEnd.theta - this._spherical.theta;
	        const deltaPhi = this._sphericalEnd.phi - this._spherical.phi;
	        const deltaRadius = this._sphericalEnd.radius - this._spherical.radius;
	        const deltaTarget = _v3A.subVectors(this._targetEnd, this._target);
	        const deltaOffset = _v3B.subVectors(this._focalOffsetEnd, this._focalOffset);
	        if (!approxZero(deltaTheta) ||
	            !approxZero(deltaPhi) ||
	            !approxZero(deltaRadius) ||
	            !approxZero(deltaTarget.x) ||
	            !approxZero(deltaTarget.y) ||
	            !approxZero(deltaTarget.z) ||
	            !approxZero(deltaOffset.x) ||
	            !approxZero(deltaOffset.y) ||
	            !approxZero(deltaOffset.z)) {
	            this._spherical.set(this._spherical.radius + deltaRadius * lerpRatio, this._spherical.phi + deltaPhi * lerpRatio, this._spherical.theta + deltaTheta * lerpRatio);
	            this._target.add(deltaTarget.multiplyScalar(lerpRatio));
	            this._focalOffset.add(deltaOffset.multiplyScalar(lerpRatio));
	            this._needsUpdate = true;
	        }
	        else {
	            this._spherical.copy(this._sphericalEnd);
	            this._target.copy(this._targetEnd);
	            this._focalOffset.copy(this._focalOffsetEnd);
	        }
	        if (this._dollyControlAmount !== 0) {
	            if (isPerspectiveCamera(this._camera)) {
	                const camera = this._camera;
	                const direction = _v3A.setFromSpherical(this._sphericalEnd).applyQuaternion(this._yAxisUpSpaceInverse).normalize().negate();
	                const planeX = _v3B.copy(direction).cross(camera.up).normalize();
	                if (planeX.lengthSq() === 0)
	                    planeX.x = 1.0;
	                const planeY = _v3C.crossVectors(planeX, direction);
	                const worldToScreen = this._sphericalEnd.radius * Math.tan(camera.getEffectiveFOV() * THREE$1.MathUtils.DEG2RAD * 0.5);
	                const prevRadius = this._sphericalEnd.radius - this._dollyControlAmount;
	                const lerpRatio = (prevRadius - this._sphericalEnd.radius) / this._sphericalEnd.radius;
	                const cursor = _v3A.copy(this._targetEnd)
	                    .add(planeX.multiplyScalar(this._dollyControlCoord.x * worldToScreen * camera.aspect))
	                    .add(planeY.multiplyScalar(this._dollyControlCoord.y * worldToScreen));
	                this._targetEnd.lerp(cursor, lerpRatio);
	                this._target.copy(this._targetEnd);
	            }
	            else if (isOrthographicCamera(this._camera)) {
	                const camera = this._camera;
	                const worldPosition = _v3A.set(this._dollyControlCoord.x, this._dollyControlCoord.y, (camera.near + camera.far) / (camera.near - camera.far)).unproject(camera);
	                const quaternion = _v3B.set(0, 0, -1).applyQuaternion(camera.quaternion);
	                const divisor = quaternion.dot(camera.up);
	                const distance = approxZero(divisor) ? -worldPosition.dot(camera.up) : -worldPosition.dot(camera.up) / divisor;
	                const cursor = _v3C.copy(worldPosition).add(quaternion.multiplyScalar(distance));
	                this._targetEnd.lerp(cursor, 1 - camera.zoom / this._dollyControlAmount);
	                this._target.copy(this._targetEnd);
	            }
	            this._dollyControlAmount = 0;
	        }
	        const maxDistance = this._collisionTest();
	        this._spherical.radius = Math.min(this._spherical.radius, maxDistance);
	        this._spherical.makeSafe();
	        this._camera.position.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(this._target);
	        this._camera.lookAt(this._target);
	        const affectOffset = !approxZero(this._focalOffset.x) ||
	            !approxZero(this._focalOffset.y) ||
	            !approxZero(this._focalOffset.z);
	        if (affectOffset) {
	            this._camera.updateMatrix();
	            _xColumn.setFromMatrixColumn(this._camera.matrix, 0);
	            _yColumn.setFromMatrixColumn(this._camera.matrix, 1);
	            _zColumn.setFromMatrixColumn(this._camera.matrix, 2);
	            _xColumn.multiplyScalar(this._focalOffset.x);
	            _yColumn.multiplyScalar(-this._focalOffset.y);
	            _zColumn.multiplyScalar(this._focalOffset.z);
	            _v3A.copy(_xColumn).add(_yColumn).add(_zColumn);
	            this._camera.position.add(_v3A);
	        }
	        if (this._boundaryEnclosesCamera) {
	            this._encloseToBoundary(this._camera.position.copy(this._target), _v3A.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse), 1.0);
	        }
	        const zoomDelta = this._zoomEnd - this._zoom;
	        this._zoom += zoomDelta * lerpRatio;
	        if (this._camera.zoom !== this._zoom) {
	            if (approxZero(zoomDelta))
	                this._zoom = this._zoomEnd;
	            this._camera.zoom = this._zoom;
	            this._camera.updateProjectionMatrix();
	            this._updateNearPlaneCorners();
	            this._needsUpdate = true;
	        }
	        const updated = this._needsUpdate;
	        if (updated && !this._updatedLastTime) {
	            this._hasRested = false;
	            this.dispatchEvent({ type: 'wake' });
	            this.dispatchEvent({ type: 'update' });
	        }
	        else if (updated) {
	            this.dispatchEvent({ type: 'update' });
	            if (approxZero(deltaTheta, this.restThreshold) &&
	                approxZero(deltaPhi, this.restThreshold) &&
	                approxZero(deltaRadius, this.restThreshold) &&
	                approxZero(deltaTarget.x, this.restThreshold) &&
	                approxZero(deltaTarget.y, this.restThreshold) &&
	                approxZero(deltaTarget.z, this.restThreshold) &&
	                approxZero(deltaOffset.x, this.restThreshold) &&
	                approxZero(deltaOffset.y, this.restThreshold) &&
	                approxZero(deltaOffset.z, this.restThreshold) &&
	                !this._hasRested) {
	                this._hasRested = true;
	                this.dispatchEvent({ type: 'rest' });
	            }
	        }
	        else if (!updated && this._updatedLastTime) {
	            this.dispatchEvent({ type: 'sleep' });
	        }
	        this._updatedLastTime = updated;
	        this._needsUpdate = false;
	        return updated;
	    }
	    toJSON() {
	        return JSON.stringify({
	            enabled: this._enabled,
	            minDistance: this.minDistance,
	            maxDistance: infinityToMaxNumber(this.maxDistance),
	            minZoom: this.minZoom,
	            maxZoom: infinityToMaxNumber(this.maxZoom),
	            minPolarAngle: this.minPolarAngle,
	            maxPolarAngle: infinityToMaxNumber(this.maxPolarAngle),
	            minAzimuthAngle: infinityToMaxNumber(this.minAzimuthAngle),
	            maxAzimuthAngle: infinityToMaxNumber(this.maxAzimuthAngle),
	            dampingFactor: this.dampingFactor,
	            draggingDampingFactor: this.draggingDampingFactor,
	            dollySpeed: this.dollySpeed,
	            truckSpeed: this.truckSpeed,
	            dollyToCursor: this.dollyToCursor,
	            verticalDragToForward: this.verticalDragToForward,
	            target: this._targetEnd.toArray(),
	            position: _v3A.setFromSpherical(this._sphericalEnd).add(this._targetEnd).toArray(),
	            zoom: this._zoomEnd,
	            focalOffset: this._focalOffsetEnd.toArray(),
	            target0: this._target0.toArray(),
	            position0: this._position0.toArray(),
	            zoom0: this._zoom0,
	            focalOffset0: this._focalOffset0.toArray(),
	        });
	    }
	    fromJSON(json, enableTransition = false) {
	        const obj = JSON.parse(json);
	        const position = _v3A.fromArray(obj.position);
	        this.enabled = obj.enabled;
	        this.minDistance = obj.minDistance;
	        this.maxDistance = maxNumberToInfinity(obj.maxDistance);
	        this.minZoom = obj.minZoom;
	        this.maxZoom = maxNumberToInfinity(obj.maxZoom);
	        this.minPolarAngle = obj.minPolarAngle;
	        this.maxPolarAngle = maxNumberToInfinity(obj.maxPolarAngle);
	        this.minAzimuthAngle = maxNumberToInfinity(obj.minAzimuthAngle);
	        this.maxAzimuthAngle = maxNumberToInfinity(obj.maxAzimuthAngle);
	        this.dampingFactor = obj.dampingFactor;
	        this.draggingDampingFactor = obj.draggingDampingFactor;
	        this.dollySpeed = obj.dollySpeed;
	        this.truckSpeed = obj.truckSpeed;
	        this.dollyToCursor = obj.dollyToCursor;
	        this.verticalDragToForward = obj.verticalDragToForward;
	        this._target0.fromArray(obj.target0);
	        this._position0.fromArray(obj.position0);
	        this._zoom0 = obj.zoom0;
	        this._focalOffset0.fromArray(obj.focalOffset0);
	        this.moveTo(obj.target[0], obj.target[1], obj.target[2], enableTransition);
	        _sphericalA.setFromVector3(position.sub(this._targetEnd).applyQuaternion(this._yAxisUpSpace));
	        this.rotateTo(_sphericalA.theta, _sphericalA.phi, enableTransition);
	        this.zoomTo(obj.zoom, enableTransition);
	        this.setFocalOffset(obj.focalOffset[0], obj.focalOffset[1], obj.focalOffset[2], enableTransition);
	        this._needsUpdate = true;
	    }
	    dispose() {
	        this._removeAllEventListeners();
	    }
	    _findPointerById(pointerId) {
	        let pointer = null;
	        this._activePointers.some((activePointer) => {
	            if (activePointer.pointerId === pointerId) {
	                pointer = activePointer;
	                return true;
	            }
	            return false;
	        });
	        return pointer;
	    }
	    _encloseToBoundary(position, offset, friction) {
	        const offsetLength2 = offset.lengthSq();
	        if (offsetLength2 === 0.0) {
	            return position;
	        }
	        const newTarget = _v3B.copy(offset).add(position);
	        const clampedTarget = this._boundary.clampPoint(newTarget, _v3C);
	        const deltaClampedTarget = clampedTarget.sub(newTarget);
	        const deltaClampedTargetLength2 = deltaClampedTarget.lengthSq();
	        if (deltaClampedTargetLength2 === 0.0) {
	            return position.add(offset);
	        }
	        else if (deltaClampedTargetLength2 === offsetLength2) {
	            return position;
	        }
	        else if (friction === 0.0) {
	            return position.add(offset).add(deltaClampedTarget);
	        }
	        else {
	            const offsetFactor = 1.0 + friction * deltaClampedTargetLength2 / offset.dot(deltaClampedTarget);
	            return position
	                .add(_v3B.copy(offset).multiplyScalar(offsetFactor))
	                .add(deltaClampedTarget.multiplyScalar(1.0 - friction));
	        }
	    }
	    _updateNearPlaneCorners() {
	        if (isPerspectiveCamera(this._camera)) {
	            const camera = this._camera;
	            const near = camera.near;
	            const fov = camera.getEffectiveFOV() * THREE$1.MathUtils.DEG2RAD;
	            const heightHalf = Math.tan(fov * 0.5) * near;
	            const widthHalf = heightHalf * camera.aspect;
	            this._nearPlaneCorners[0].set(-widthHalf, -heightHalf, 0);
	            this._nearPlaneCorners[1].set(widthHalf, -heightHalf, 0);
	            this._nearPlaneCorners[2].set(widthHalf, heightHalf, 0);
	            this._nearPlaneCorners[3].set(-widthHalf, heightHalf, 0);
	        }
	        else if (isOrthographicCamera(this._camera)) {
	            const camera = this._camera;
	            const zoomInv = 1 / camera.zoom;
	            const left = camera.left * zoomInv;
	            const right = camera.right * zoomInv;
	            const top = camera.top * zoomInv;
	            const bottom = camera.bottom * zoomInv;
	            this._nearPlaneCorners[0].set(left, top, 0);
	            this._nearPlaneCorners[1].set(right, top, 0);
	            this._nearPlaneCorners[2].set(right, bottom, 0);
	            this._nearPlaneCorners[3].set(left, bottom, 0);
	        }
	    }
	    _collisionTest() {
	        let distance = Infinity;
	        const hasCollider = this.colliderMeshes.length >= 1;
	        if (!hasCollider)
	            return distance;
	        if (notSupportedInOrthographicCamera(this._camera, '_collisionTest'))
	            return distance;
	        const direction = _v3A.setFromSpherical(this._spherical).divideScalar(this._spherical.radius);
	        _rotationMatrix.lookAt(_ORIGIN, direction, this._camera.up);
	        for (let i = 0; i < 4; i++) {
	            const nearPlaneCorner = _v3B.copy(this._nearPlaneCorners[i]);
	            nearPlaneCorner.applyMatrix4(_rotationMatrix);
	            const origin = _v3C.addVectors(this._target, nearPlaneCorner);
	            _raycaster.set(origin, direction);
	            _raycaster.far = this._spherical.radius + 1;
	            const intersects = _raycaster.intersectObjects(this.colliderMeshes);
	            if (intersects.length !== 0 && intersects[0].distance < distance) {
	                distance = intersects[0].distance;
	            }
	        }
	        return distance;
	    }
	    _getClientRect(target) {
	        const rect = this._domElement.getBoundingClientRect();
	        target.x = rect.left;
	        target.y = rect.top;
	        if (this._viewport) {
	            target.x += this._viewport.x;
	            target.y += rect.height - this._viewport.w - this._viewport.y;
	            target.width = this._viewport.z;
	            target.height = this._viewport.w;
	        }
	        else {
	            target.width = rect.width;
	            target.height = rect.height;
	        }
	        return target;
	    }
	    _createOnRestPromise(resolveImmediately) {
	        if (resolveImmediately)
	            return Promise.resolve();
	        this._hasRested = false;
	        this.dispatchEvent({ type: 'transitionstart' });
	        return new Promise((resolve) => {
	            const onResolve = () => {
	                this.removeEventListener('rest', onResolve);
	                resolve();
	            };
	            this.addEventListener('rest', onResolve);
	        });
	    }
	    _removeAllEventListeners() { }
	}
	function createBoundingSphere(object3d, out) {
	    const boundingSphere = out;
	    const center = boundingSphere.center;
	    object3d.traverse((object) => {
	        if (!object.isMesh)
	            return;
	        _box3A.expandByObject(object);
	    });
	    _box3A.getCenter(center);
	    let maxRadiusSq = 0;
	    object3d.traverse((object) => {
	        if (!object.isMesh)
	            return;
	        const mesh = object;
	        const geometry = mesh.geometry.clone();
	        geometry.applyMatrix4(mesh.matrixWorld);
	        if (geometry.isBufferGeometry) {
	            const bufferGeometry = geometry;
	            const position = bufferGeometry.attributes.position;
	            for (let i = 0, l = position.count; i < l; i++) {
	                _v3A.fromBufferAttribute(position, i);
	                maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(_v3A));
	            }
	        }
	        else {
	            const position = geometry.attributes.position;
	            const vector = new THREE$1.Vector3();
	            for (let i = 0, l = position.count; i < l; i++) {
	                vector.fromBufferAttribute(position, i);
	                maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(vector));
	            }
	        }
	    });
	    boundingSphere.radius = Math.sqrt(maxRadiusSq);
	    return boundingSphere;
	}

	onInstallHandlers.push(function () {
	  CameraControls.install({
	    THREE: THREE$2
	  });
	});
	var TPSCameraControls = /*#__PURE__*/function (_CameraControls) {
	  _inherits(TPSCameraControls, _CameraControls);

	  var _super = _createSuper(TPSCameraControls);

	  function TPSCameraControls(camera, trackObject, domElement) {
	    var _thisSuper, _this;

	    _classCallCheck(this, TPSCameraControls);

	    _this = _super.call(this, camera, domElement);
	    _this.minDistance = 1;
	    _this.maxDistance = 30;
	    _this.azimuthRotateSpeed = 0.3; // negative value to invert rotation direction

	    _this.polarRotateSpeed = -0.2; // negative value to invert rotation direction

	    _this.minPolarAngle = 30 * THREE$2.Math.DEG2RAD;
	    _this.maxPolarAngle = 120 * THREE$2.Math.DEG2RAD;
	    _this.draggingDampingFactor = 1;
	    _this.mouseButtons.right = CameraControls.ACTION.NONE;
	    _this.mouseButtons.middle = CameraControls.ACTION.NONE;
	    _this.touches.two = CameraControls.ACTION.TOUCH_DOLLY;
	    _this.touches.three = CameraControls.ACTION.TOUCH_DOLLY; // this._trackObject = trackObject;
	    // this.offset = new THREE.Vector3( 0, 1, 0 );

	    var offset = new THREE$2.Vector3(0, 1, 0);

	    _this.update = function (delta) {
	      var x = trackObject.position.x + offset.x;
	      var y = trackObject.position.y + offset.y;
	      var z = trackObject.position.z + offset.z;

	      _this.moveTo(x, y, z, false);

	      _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(TPSCameraControls.prototype)), "update", _thisSuper).call(_thisSuper, delta);
	    };

	    return _this;
	  }

	  _createClass(TPSCameraControls, [{
	    key: "frontAngle",
	    get: function get() {
	      return this.azimuthAngle;
	    }
	  }]);

	  return TPSCameraControls;
	}(CameraControls);

	exports.AnimationController = AnimationController;
	exports.CharacterController = CharacterController;
	exports.KeyInputControl = KeyInputControl;
	exports.Octree = Octree;
	exports.TPSCameraControls = TPSCameraControls;
	exports.World = World;
	exports.install = install;

	Object.defineProperty(exports, '__esModule', { value: true });

}));

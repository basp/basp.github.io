1581
((3) 0 () 5 ((q lib "lumex/math.rkt") (q 216 . 4) (q 144 . 4) (q 72 . 4) (q 0 . 4)) () (h ! (equal) ((c def c (c (? . 0) q M2x2)) c (? . 3)) ((c def c (c (? . 0) q vec4-z)) q (1618 . 3)) ((c def c (c (? . 0) q vec4-dot)) q (2032 . 3)) ((c def c (c (? . 0) q M4x4?)) c (? . 1)) ((c def c (c (? . 0) q Vec4-flv)) c (? . 4)) ((c def c (c (? . 0) q vec4-w)) q (1667 . 3)) ((c def c (c (? . 0) q struct:M3x3)) c (? . 2)) ((c def c (c (? . 0) q m4x4)) q (771 . 33)) ((c def c (c (? . 0) q M4x4)) c (? . 1)) ((c def c (c (? . 0) q vec4-x)) q (1520 . 3)) ((c def c (c (? . 0) q M3x3-flv)) c (? . 2)) ((c def c (c (? . 0) q struct:M2x2)) c (? . 3)) ((c def c (c (? . 0) q vec4)) q (288 . 6)) ((c def c (c (? . 0) q struct:Vec4)) c (? . 4)) ((c def c (c (? . 0) q m4x4-ref)) q (1716 . 5)) ((c def c (c (? . 0) q vec4+)) q (1838 . 4)) ((c def c (c (? . 0) q vec4-ref)) q (1442 . 4)) ((c def c (c (? . 0) q rad->deg)) q (2262 . 3)) ((c def c (c (? . 0) q =~)) q (2092 . 5)) ((c def c (c (? . 0) q Vec4?)) c (? . 4)) ((c def c (c (? . 0) q M2x2?)) c (? . 3)) ((c def c (c (? . 0) q M3x3)) c (? . 2)) ((c def c (c (? . 0) q deg->rad)) q (2209 . 3)) ((c def c (c (? . 0) q struct:M4x4)) c (? . 1)) ((c def c (c (? . 0) q Vec4)) c (? . 4)) ((c def c (c (? . 0) q vec4-y)) q (1569 . 3)) ((c def c (c (? . 0) q vec4*)) q (1966 . 4)) ((c def c (c (? . 0) q M3x3?)) c (? . 2)) ((c def c (c (? . 0) q m2x2)) q (395 . 6)) ((c def c (c (? . 0) q M4x4-flv)) c (? . 1)) ((c def c (c (? . 0) q vec4-)) q (1902 . 4)) ((c def c (c (? . 0) q m3x3)) q (523 . 11)) ((c def c (c (? . 0) q M2x2-flv)) c (? . 3))))
struct
(struct Vec4 (flv)
    #:transparent)
  flv : FlVector
struct
(struct M2x2 (flv)
    #:transparent)
  flv : FlVector
struct
(struct M3x3 (flv)
    #:transparent)
  flv : FlVector
struct
(struct M4x4 (flv)
    #:transparent)
  flv : FlVector
procedure
(vec4 x y z w) -> Vec4
  x : Flonum
  y : Flonum
  z : Flonum
  w : Flonum
procedure
(m2x2 m00 m01 m10 m11) -> Matrix2x2
  m00 : Flonum
  m01 : Flonum
  m10 : Flonum
  m11 : Flonum
procedure
(m3x3 m00 m01 m02 m10 m11 m12 m20 m21 m22) -> Matrix3x3
  m00 : Flonum
  m01 : Flonum
  m02 : Flonum
  m10 : Flonum
  m11 : Flonum
  m12 : Flonum
  m20 : Flonum
  m21 : Flonum
  m22 : Flonum
procedure
(m4x4 m00      
      m01      
      m02      
      m03      
      m10      
      m11      
      m12      
      m13      
      m20      
      m21      
      m22      
      m23      
      m30      
      m31      
      m32      
      m33) -> Matrix4x4
  m00 : Flonum
  m01 : Flonum
  m02 : Flonum
  m03 : Flonum
  m10 : Flonum
  m11 : Flonum
  m12 : Flonum
  m13 : Flonum
  m20 : Flonum
  m21 : Flonum
  m22 : Flonum
  m23 : Flonum
  m30 : Flonum
  m31 : Flonum
  m32 : Flonum
  m33 : Flonum
procedure
(vec4-ref v i) -> Real
  v : Vec4
  i : (U 0 1 2 3)
procedure
(vec4-x v) -> Flonum
  v : Vec4
procedure
(vec4-y v) -> Flonum
  v : Vec4
procedure
(vec4-z v) -> Flonum
  v : Vec4
procedure
(vec4-w v) -> Flonum
  v : Vec4
procedure
(m4x4-ref m row col) -> Flonum
  m : Matrix4x4
  row : (U 0 1 2 3)
  col : (U 0 1 2 3)
procedure
(vec4+ u v) -> Vec4
  u : Vec4
  v : Vec4
procedure
(vec4- u v) -> Vec4
  u : Vec4
  v : Vec4
procedure
(vec4* c v) -> Vec4
  c : Flonum
  v : Vec4
procedure
(vec4-dot [u]) -> Flonum
  u : Vv = Vec4
procedure
(=~ v1 v2 [epsilon]) -> Boolean
  v1 : Flonum
  v2 : Flonum
  epsilon : Flonum = 1e-005
procedure
(deg->rad deg) -> Real
  deg : Real
procedure
(rad->deg deg) -> Real
  deg : Real

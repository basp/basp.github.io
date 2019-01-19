1217
((3) 0 () 3 ((q lib "lumex/math.rkt") (q 116 . 4) (q 44 . 4)) () (h ! (equal) ((c def c (c (? . 0) q vec4-z)) q (1137 . 3)) ((c def c (c (? . 0) q vec4-dot)) q (1551 . 4)) ((c def c (c (? . 0) q M4x4?)) c (? . 1)) ((c def c (c (? . 0) q Vec4-flv)) c (? . 2)) ((c def c (c (? . 0) q m4x4)) q (295 . 33)) ((c def c (c (? . 0) q M4x4)) c (? . 1)) ((c def c (c (? . 0) q vec4-x)) q (1039 . 3)) ((c def c (c (? . 0) q vec4)) q (188 . 6)) ((c def c (c (? . 0) q vec4-w)) q (1186 . 3)) ((c def c (c (? . 0) q m4x4-ref)) q (1235 . 5)) ((c def c (c (? . 0) q vec4+)) q (1357 . 4)) ((c def c (c (? . 0) q vec4-ref)) q (961 . 4)) ((c def c (c (? . 0) q rad->deg)) q (1871 . 3)) ((c def c (c (? . 0) q default-epsilon)) q (0 . 2)) ((c def c (c (? . 0) q =~)) q (1620 . 5)) ((c def c (c (? . 0) q Vec4?)) c (? . 2)) ((c def c (c (? . 0) q deg->rad)) q (1814 . 3)) ((c def c (c (? . 0) q struct:M4x4)) c (? . 1)) ((c def c (c (? . 0) q Vec4)) c (? . 2)) ((c def c (c (? . 0) q vec4-y)) q (1088 . 3)) ((c def c (c (? . 0) q vec4*)) q (1485 . 4)) ((c def c (c (? . 0) q vec4=~)) q (1746 . 4)) ((c def c (c (? . 0) q M4x4-flv)) c (? . 1)) ((c def c (c (? . 0) q vec4-)) q (1421 . 4)) ((c def c (c (? . 0) q struct:Vec4)) c (? . 2))))
value
default-epsilon : Flonum = 1e-005
struct
(struct Vec4 (flv)
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
      m33) -> M4x4
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
(vec4-dot u v) -> Flonum
  u : Vec4
  v : Vec4
procedure
(=~ v1 v2 [epsilon]) -> Boolean
  v1 : Flonum
  v2 : Flonum
  epsilon : Flonum = default-epsilon
procedure
(vec4=~ u v) -> Boolean
  u : Vec4
  v : Vec4
procedure
(deg->rad deg) -> Flonum
  deg : Flonum
procedure
(rad->deg rad) -> Flonum
  rad : Flonum

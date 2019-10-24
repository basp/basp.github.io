950
((3) 0 () 1 ((q lib "deepika/db.rkt")) () (h ! (equal) ((c def c (c (? . 0) q valid+?)) q (403 . 3)) ((c def c (c (? . 0) q objid?)) q (172 . 3)) ((c def c (c (? . 0) q get-object-name)) q (583 . 3)) ((c def c (c (? . 0) q objid)) q (67 . 2)) ((c def c (c (? . 0) q get-parent)) q (739 . 3)) ((c def c (c (? . 0) q create-object!)) q (456 . 3)) ((c def c (c (? . 0) q get-children)) q (895 . 3)) ((c def c (c (? . 0) q get-location)) q (966 . 3)) ((c def c (c (? . 0) q objid->number)) q (224 . 3)) ((c def c (c (? . 0) q set-object-name!)) q (648 . 4)) ((c def c (c (? . 0) q set-location!)) q (1028 . 4)) ((c def c (c (? . 0) q set-parent!)) q (799 . 4)) ((c def c (c (? . 0) q valid?)) q (351 . 3)) ((c def c (c (? . 0) q parse/args)) q (0 . 3)) ((c def c (c (? . 0) q nothing?)) q (118 . 3)) ((c def c (c (? . 0) q number->objid)) q (287 . 3)) ((c def c (c (? . 0) q $nothing)) q (90 . 2)) ((c def c (c (? . 0) q destroy-object!)) q (520 . 3))))
procedure
(parse/args s) -> (listof string?)
  s : string?
value
objid : objid?
value
$nothing : nothing?
procedure
(nothing? x) -> boolean?
  x : any/c
procedure
(objid? x) -> boolean?
  x : any/c
procedure
(objid->number oid) -> number?
  oid : objid?
procedure
(number->objid num) -> objid?
  num : integer?
procedure
(valid? x) -> boolean?
  x : any/c
procedure
(valid+? x) -> boolean?
  x : any/c
procedure
(create-object! pid) -> objid?
  pid : valid+?
procedure
(destroy-object! oid) -> any/c
  oid : valid?
procedure
(get-object-name oid) -> string?
  oid : valid?
procedure
(set-object-name! oid value) -> any
  oid : valid?
  value : string?
procedure
(get-parent oid) -> valid+?
  oid : valid?
procedure
(set-parent! oid new-parent) -> any
  oid : valid?
  new-parent : valid+?
procedure
(get-children oid) -> (listof valid?)
  oid : valid?
procedure
(get-location oid) -> valid+?
  oid : valid?
procedure
(set-location! oid new-location) -> any
  oid : valid?
  new-location : valid+?

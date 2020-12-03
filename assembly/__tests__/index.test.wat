(module
 (type $i32_i32_=>_none (func (param i32 i32)))
 (type $none_=>_none (func))
 (type $i32_=>_none (func (param i32)))
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (type $i32_i32_i32_=>_none (func (param i32 i32 i32)))
 (type $i32_i32_i32_=>_i32 (func (param i32 i32 i32) (result i32)))
 (type $i32_i32_i32_i32_=>_i32 (func (param i32 i32 i32 i32) (result i32)))
 (type $f64_f64_=>_i32 (func (param f64 f64) (result i32)))
 (type $i32_i32_i32_i32_=>_none (func (param i32 i32 i32 i32)))
 (type $none_=>_i32 (func (result i32)))
 (type $i32_i32_i32_i32_i32_i32_i32_i32_i32_i32_i32_i32_i32_=>_i32 (func (param i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) (result i32)))
 (type $i32_i32_i32_i32_f64_=>_i32 (func (param i32 i32 i32 i32 f64) (result i32)))
 (type $i32_i32_f64_f64_f64_i32_i32_i32_=>_i32 (func (param i32 i32 f64 f64 f64 i32 i32 i32) (result i32)))
 (type $i32_f64_=>_f64 (func (param i32 f64) (result f64)))
 (type $f64_=>_f64 (func (param f64) (result f64)))
 (import "env" "memory" (memory $0 1))
 (data (i32.const 1036) "(\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00(\00\00\00a\00l\00l\00o\00c\00a\00t\00i\00o\00n\00 \00t\00o\00o\00 \00l\00a\00r\00g\00e\00")
 (data (i32.const 1100) "\1e\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00p\00u\00r\00e\00.\00t\00s\00")
 (data (i32.const 1164) "\1e\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00t\00l\00s\00f\00.\00t\00s\00")
 (data (i32.const 1228) "6\00\00\00\01\00\00\00\00\00\00\00\01\00\00\006\00\00\00t\00e\00s\00t\00 \00t\00h\00e\00 \00o\00u\00t\00p\00u\00t\00 \00o\00f\00 \00g\00e\00n\00e\00r\00a\00t\00e\00")
 (data (i32.const 1308) ":\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00:\00\00\00a\00t\00 \00p\00o\00i\00n\00t\00 \00(\000\00,\00 \000\00)\00 \00w\00i\00t\00h\00o\00u\00t\00 \00c\00o\00l\00o\00r\00")
 (data (i32.const 1388) "\1c\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\1c\00\00\00I\00n\00v\00a\00l\00i\00d\00 \00l\00e\00n\00g\00t\00h\00")
 (data (i32.const 1436) "&\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00&\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00b\00u\00f\00f\00e\00r\00.\00t\00s\00")
 (data (i32.const 1500) "\03\00\00\00\01\00\00\00\00\00\00\00\00\00\00\00\03\00\00\00\ff\ff\ff")
 (data (i32.const 1532) "\04\00\00\00\01\00\00\00\00\00\00\00\00\00\00\00\04\00\00\00\ff\ff\ff\ff")
 (data (i32.const 1564) "$\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00$\00\00\00I\00n\00d\00e\00x\00 \00o\00u\00t\00 \00o\00f\00 \00r\00a\00n\00g\00e\00")
 (data (i32.const 1628) "\1a\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\1a\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00.\00t\00s\00")
 (data (i32.const 1676) "$\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00$\00\00\00~\00l\00i\00b\00/\00t\00y\00p\00e\00d\00a\00r\00r\00a\00y\00.\00t\00s\00")
 (data (i32.const 1740) "4\00\00\00\01\00\00\00\00\00\00\00\01\00\00\004\00\00\00c\00a\00c\00h\00e\00L\00e\00n\00g\00t\00h\00 \00s\00h\00o\00u\00l\00d\00 \00b\00e\00 \00e\00v\00e\00n\00")
 (data (i32.const 1820) "t\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00t\00\00\00n\00o\00d\00e\00_\00m\00o\00d\00u\00l\00e\00s\00/\00@\00a\00s\00-\00p\00e\00c\00t\00/\00a\00s\00s\00e\00m\00b\00l\00y\00/\00a\00s\00s\00e\00m\00b\00l\00y\00/\00i\00n\00t\00e\00r\00n\00a\00l\00/\00a\00s\00s\00e\00r\00t\00.\00t\00s\00")
 (data (i32.const 1964) "\00\00\00\00\01\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 1996) "\00\00\00\00\01\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 2028) "\"\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\"\00\00\00U\00i\00n\00t\008\00C\00l\00a\00m\00p\00e\00d\00A\00r\00r\00a\00y\00")
 (data (i32.const 2092) "$\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00$\00\00\00K\00e\00y\00 \00d\00o\00e\00s\00 \00n\00o\00t\00 \00e\00x\00i\00s\00t\00")
 (data (i32.const 2156) "\16\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\16\00\00\00~\00l\00i\00b\00/\00m\00a\00p\00.\00t\00s\00")
 (data (i32.const 2204) "\04\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\04\00\00\00u\008\00")
 (data (i32.const 2236) "\00\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\00\00\00\00")
 (data (i32.const 2268) "\08\00\00\00\01\00\00\00\00\00\00\00\0b\00\00\00\08\00\00\00\01\00\00\00\00\00\00\00")
 (data (i32.const 2300) "D\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00D\00\00\00a\00r\00o\00u\00n\00d\00 \00(\000\00,\00 \000\00)\00 \00w\00i\00t\00h\00 \00c\00o\00l\00o\00r\00,\00 \00t\00h\00r\00e\00a\00d\00 \000\00")
 (data (i32.const 2396) "\08\00\00\00\01\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\ff\19\00\ff\00\00\00\ff")
 (data (i32.const 2428) "\08\00\00\00\01\00\00\00\00\00\00\00\0b\00\00\00\08\00\00\00\02\00\00\00\00\00\00\00")
 (data (i32.const 2460) "D\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00D\00\00\00a\00r\00o\00u\00n\00d\00 \00(\000\00,\00 \000\00)\00 \00w\00i\00t\00h\00 \00c\00o\00l\00o\00r\00,\00 \00t\00h\00r\00e\00a\00d\00 \001\00")
 (data (i32.const 2556) "\08\00\00\00\01\00\00\00\00\00\00\00\00\00\00\00\08\00\00\00\00\00\00\ff\00\00\00\ff")
 (data (i32.const 2588) "\08\00\00\00\01\00\00\00\00\00\00\00\0b\00\00\00\08\00\00\00\03\00\00\00\00\00\00\00")
 (data (i32.const 2620) ">\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00>\00\00\00a\00t\00 \00p\00o\00i\00n\00t\00 \00(\000\00.\004\00,\00 \00-\000\00.\003\00)\00 \00w\00i\00t\00h\00 \00c\00o\00l\00o\00r\00")
 (data (i32.const 2716) "\04\00\00\00\01\00\00\00\00\00\00\00\00\00\00\00\04\00\00\00\00\e5\ff\ff")
 (data (i32.const 2748) "\08\00\00\00\01\00\00\00\00\00\00\00\0b\00\00\00\08\00\00\00\04\00\00\00\00\00\00\00")
 (data (i32.const 2780) "\08\00\00\00\01\00\00\00\00\00\00\00\0b\00\00\00\08\00\00\00\05\00\00\00\00\00\00\00")
 (data (i32.const 2812) "\08\00\00\00\01\00\00\00\00\00\00\00\0b\00\00\00\08\00\00\00\06\00\00\00\00\00\00\00")
 (data (i32.const 2848) "\0c\00\00\00 \00\00\00\00\00\00\00 \00\00\00\00\00\00\00 \00\00\00\00\00\00\00a\00\00\00\02\00\00\00 \00\00\00\00\00\00\00 \00\00\00\00\00\00\00 \00\00\00\00\00\00\00b\00\00\00\00\00\00\00\"\t\00\00\00\00\00\00\"\01\00\00\00\00\00\000\t\02\00\00\00\00\00 \00\00\00\00\00\00\00")
 (import "env" "abort" (func $~lib/builtins/abort (param i32 i32 i32 i32)))
 (import "rtrace" "onalloc" (func $~lib/rt/rtrace/onalloc (param i32)))
 (import "rtrace" "onmove" (func $~lib/rt/rtrace/onmove (param i32 i32)))
 (import "rtrace" "onfree" (func $~lib/rt/rtrace/onfree (param i32)))
 (import "rtrace" "onresize" (func $~lib/rt/rtrace/onresize (param i32 i32)))
 (import "rtrace" "onincrement" (func $~lib/rt/rtrace/onincrement (param i32)))
 (import "__aspect" "createReflectedValue" (func $node_modules/@as-pect/assembly/assembly/internal/Reflect/createReflectedValue (param i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) (result i32)))
 (import "__aspect" "createReflectedNumber" (func $node_modules/@as-pect/assembly/assembly/internal/Reflect/createReflectedNumber (param i32 i32 i32 i32 f64) (result i32)))
 (import "__aspect" "pushReflectedObjectValue" (func $node_modules/@as-pect/assembly/assembly/internal/Reflect/__aspectPushReflectedObjectValue (param i32 i32)))
 (import "__aspect" "attachStackTraceToReflectedValue" (func $node_modules/@as-pect/assembly/assembly/internal/Reflect/attachStackTraceToReflectedValue (param i32)))
 (import "__aspect" "reportActualReflectedValue" (func $node_modules/@as-pect/assembly/assembly/internal/Actual/reportActualReflectedValue (param i32)))
 (import "__aspect" "reportExpectedReflectedValue" (func $node_modules/@as-pect/assembly/assembly/internal/Expected/reportExpectedReflectedValue (param i32 i32)))
 (import "__aspect" "clearActual" (func $node_modules/@as-pect/assembly/assembly/internal/Actual/clearActual))
 (import "__aspect" "clearExpected" (func $node_modules/@as-pect/assembly/assembly/internal/Expected/clearExpected))
 (import "__aspect" "reportTestTypeNode" (func $node_modules/@as-pect/assembly/assembly/internal/Test/test (param i32 i32)))
 (import "__aspect" "reportGroupTypeNode" (func $node_modules/@as-pect/assembly/assembly/internal/Test/describe (param i32 i32)))
 (import "rtrace" "ondecrement" (func $~lib/rt/rtrace/ondecrement (param i32)))
 (table $0 7 funcref)
 (elem (i32.const 1) $start:assembly/__tests__/index.test~anonymous|0~anonymous|0 $start:assembly/__tests__/index.test~anonymous|0~anonymous|1 $start:assembly/__tests__/index.test~anonymous|0~anonymous|2 $start:assembly/__tests__/index.test~anonymous|0~anonymous|3 $start:assembly/__tests__/index.test~anonymous|0 $start:node_modules/@as-pect/assembly/assembly/internal/noOp~anonymous|0)
 (global $~lib/rt/tlsf/ROOT (mut i32) (i32.const 0))
 (global $~argumentsLength (mut i32) (i32.const 0))
 (global $~started (mut i32) (i32.const 0))
 (global $~lib/rt/__rtti_base i32 (i32.const 2848))
 (export "_start" (func $~start))
 (export "memory" (memory $0))
 (export "table" (table $0))
 (export "__new" (func $~lib/rt/pure/__new))
 (export "__renew" (func $~lib/rt/pure/__renew))
 (export "__retain" (func $~lib/rt/pure/__retain))
 (export "__release" (func $~lib/rt/pure/__release))
 (export "__rtti_base" (global $~lib/rt/__rtti_base))
 (export "__call" (func $node_modules/@as-pect/assembly/assembly/internal/call/__call))
 (export "__ignoreLogs" (func $node_modules/@as-pect/assembly/assembly/internal/log/__ignoreLogs))
 (export "__disableRTrace" (func $start:node_modules/@as-pect/assembly/assembly/internal/noOp~anonymous|0))
 (export "__getUsizeArrayId" (func $node_modules/@as-pect/assembly/assembly/internal/RTrace/__getUsizeArrayId))
 (func $~lib/rt/tlsf/removeBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  i32.load
  local.tee $2
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1184
   i32.const 272
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const -4
  i32.and
  local.tee $2
  i32.const 1073741820
  i32.lt_u
  i32.const 0
  local.get $2
  i32.const 12
  i32.ge_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1184
   i32.const 274
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const 256
  i32.lt_u
  if
   local.get $2
   i32.const 4
   i32.shr_u
   local.set $2
  else
   local.get $2
   i32.const 31
   local.get $2
   i32.clz
   i32.sub
   local.tee $3
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $2
   local.get $3
   i32.const 7
   i32.sub
   local.set $3
  end
  local.get $2
  i32.const 16
  i32.lt_u
  i32.const 0
  local.get $3
  i32.const 23
  i32.lt_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1184
   i32.const 287
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.load offset=8
  local.set $4
  local.get $1
  i32.load offset=4
  local.tee $5
  if
   local.get $5
   local.get $4
   i32.store offset=8
  end
  local.get $4
  if
   local.get $4
   local.get $5
   i32.store offset=4
  end
  local.get $1
  local.get $0
  local.get $2
  local.get $3
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
  i32.eq
  if
   local.get $0
   local.get $2
   local.get $3
   i32.const 4
   i32.shl
   i32.add
   i32.const 2
   i32.shl
   i32.add
   local.get $4
   i32.store offset=96
   local.get $4
   i32.eqz
   if
    local.get $0
    local.get $3
    i32.const 2
    i32.shl
    i32.add
    local.tee $4
    i32.load offset=4
    i32.const -2
    local.get $2
    i32.rotl
    i32.and
    local.set $1
    local.get $4
    local.get $1
    i32.store offset=4
    local.get $1
    i32.eqz
    if
     local.get $0
     local.get $0
     i32.load
     i32.const -2
     local.get $3
     i32.rotl
     i32.and
     i32.store
    end
   end
  end
 )
 (func $~lib/rt/tlsf/insertBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  local.get $1
  i32.eqz
  if
   i32.const 0
   i32.const 1184
   i32.const 200
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.load
  local.tee $4
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1184
   i32.const 202
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 4
  i32.add
  local.get $1
  i32.load
  i32.const -4
  i32.and
  i32.add
  local.tee $5
  i32.load
  local.tee $2
  i32.const 1
  i32.and
  if
   local.get $4
   i32.const -4
   i32.and
   i32.const 4
   i32.add
   local.get $2
   i32.const -4
   i32.and
   i32.add
   local.tee $3
   i32.const 1073741820
   i32.lt_u
   if
    local.get $0
    local.get $5
    call $~lib/rt/tlsf/removeBlock
    local.get $1
    local.get $3
    local.get $4
    i32.const 3
    i32.and
    i32.or
    local.tee $4
    i32.store
    local.get $1
    i32.const 4
    i32.add
    local.get $1
    i32.load
    i32.const -4
    i32.and
    i32.add
    local.tee $5
    i32.load
    local.set $2
   end
  end
  local.get $4
  i32.const 2
  i32.and
  if
   local.get $1
   i32.const 4
   i32.sub
   i32.load
   local.tee $3
   i32.load
   local.tee $7
   i32.const 1
   i32.and
   i32.eqz
   if
    i32.const 0
    i32.const 1184
    i32.const 223
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $7
   i32.const -4
   i32.and
   i32.const 4
   i32.add
   local.get $4
   i32.const -4
   i32.and
   i32.add
   local.tee $8
   i32.const 1073741820
   i32.lt_u
   if (result i32)
    local.get $0
    local.get $3
    call $~lib/rt/tlsf/removeBlock
    local.get $3
    local.get $8
    local.get $7
    i32.const 3
    i32.and
    i32.or
    local.tee $4
    i32.store
    local.get $3
   else
    local.get $1
   end
   local.set $1
  end
  local.get $5
  local.get $2
  i32.const 2
  i32.or
  i32.store
  local.get $4
  i32.const -4
  i32.and
  local.tee $3
  i32.const 1073741820
  i32.lt_u
  i32.const 0
  local.get $3
  i32.const 12
  i32.ge_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1184
   i32.const 238
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  local.get $1
  i32.const 4
  i32.add
  i32.add
  local.get $5
  i32.ne
  if
   i32.const 0
   i32.const 1184
   i32.const 239
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $5
  i32.const 4
  i32.sub
  local.get $1
  i32.store
  local.get $3
  i32.const 256
  i32.lt_u
  if
   local.get $3
   i32.const 4
   i32.shr_u
   local.set $3
  else
   local.get $3
   i32.const 31
   local.get $3
   i32.clz
   i32.sub
   local.tee $4
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $3
   local.get $4
   i32.const 7
   i32.sub
   local.set $6
  end
  local.get $3
  i32.const 16
  i32.lt_u
  i32.const 0
  local.get $6
  i32.const 23
  i32.lt_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1184
   i32.const 255
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $3
  local.get $6
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
  local.set $4
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  local.get $4
  i32.store offset=8
  local.get $4
  if
   local.get $4
   local.get $1
   i32.store offset=4
  end
  local.get $0
  local.get $3
  local.get $6
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  i32.store offset=96
  local.get $0
  local.get $0
  i32.load
  i32.const 1
  local.get $6
  i32.shl
  i32.or
  i32.store
  local.get $0
  local.get $6
  i32.const 2
  i32.shl
  i32.add
  local.tee $0
  local.get $0
  i32.load offset=4
  i32.const 1
  local.get $3
  i32.shl
  i32.or
  i32.store offset=4
 )
 (func $~lib/rt/tlsf/addMemory (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  local.get $2
  i32.gt_u
  if
   i32.const 0
   i32.const 1184
   i32.const 380
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 19
  i32.add
  i32.const -16
  i32.and
  i32.const 4
  i32.sub
  local.set $1
  local.get $2
  i32.const -16
  i32.and
  local.get $0
  i32.load offset=1568
  local.tee $2
  if
   local.get $1
   local.get $2
   i32.const 4
   i32.add
   i32.lt_u
   if
    i32.const 0
    i32.const 1184
    i32.const 387
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $2
   local.get $1
   i32.const 16
   i32.sub
   i32.eq
   if
    local.get $2
    i32.load
    local.set $4
    local.get $1
    i32.const 16
    i32.sub
    local.set $1
   end
  else
   local.get $1
   local.get $0
   i32.const 1572
   i32.add
   i32.lt_u
   if
    i32.const 0
    i32.const 1184
    i32.const 400
    i32.const 5
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $1
  i32.sub
  local.tee $2
  i32.const 20
  i32.lt_u
  if
   return
  end
  local.get $1
  local.get $4
  i32.const 2
  i32.and
  local.get $2
  i32.const 8
  i32.sub
  local.tee $2
  i32.const 1
  i32.or
  i32.or
  i32.store
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.store offset=8
  local.get $2
  local.get $1
  i32.const 4
  i32.add
  i32.add
  local.tee $2
  i32.const 2
  i32.store
  local.get $0
  local.get $2
  i32.store offset=1568
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/insertBlock
 )
 (func $~lib/rt/tlsf/initialize
  (local $0 i32)
  (local $1 i32)
  memory.size
  local.tee $0
  i32.const 1
  i32.lt_s
  if (result i32)
   i32.const 1
   local.get $0
   i32.sub
   memory.grow
   i32.const 0
   i32.lt_s
  else
   i32.const 0
  end
  if
   unreachable
  end
  i32.const 2960
  i32.const 0
  i32.store
  i32.const 4528
  i32.const 0
  i32.store
  loop $for-loop|0
   local.get $1
   i32.const 23
   i32.lt_u
   if
    local.get $1
    i32.const 2
    i32.shl
    i32.const 2960
    i32.add
    i32.const 0
    i32.store offset=4
    i32.const 0
    local.set $0
    loop $for-loop|1
     local.get $0
     i32.const 16
     i32.lt_u
     if
      local.get $0
      local.get $1
      i32.const 4
      i32.shl
      i32.add
      i32.const 2
      i32.shl
      i32.const 2960
      i32.add
      i32.const 0
      i32.store offset=96
      local.get $0
      i32.const 1
      i32.add
      local.set $0
      br $for-loop|1
     end
    end
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    br $for-loop|0
   end
  end
  i32.const 2960
  i32.const 4532
  memory.size
  i32.const 16
  i32.shl
  call $~lib/rt/tlsf/addMemory
  i32.const 2960
  global.set $~lib/rt/tlsf/ROOT
 )
 (func $~lib/rt/tlsf/prepareSize (param $0 i32) (result i32)
  local.get $0
  i32.const 1073741820
  i32.ge_u
  if
   i32.const 1056
   i32.const 1184
   i32.const 461
   i32.const 30
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 12
  local.get $0
  i32.const 19
  i32.add
  i32.const -16
  i32.and
  i32.const 4
  i32.sub
  local.get $0
  i32.const 12
  i32.le_u
  select
 )
 (func $~lib/rt/tlsf/searchBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  i32.const 256
  i32.lt_u
  if
   local.get $1
   i32.const 4
   i32.shr_u
   local.set $1
  else
   i32.const 31
   local.get $1
   i32.const 1
   i32.const 27
   local.get $1
   i32.clz
   i32.sub
   i32.shl
   i32.add
   i32.const 1
   i32.sub
   local.get $1
   local.get $1
   i32.const 536870910
   i32.lt_u
   select
   local.tee $1
   i32.clz
   i32.sub
   local.set $2
   local.get $1
   local.get $2
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $1
   local.get $2
   i32.const 7
   i32.sub
   local.set $2
  end
  local.get $1
  i32.const 16
  i32.lt_u
  i32.const 0
  local.get $2
  i32.const 23
  i32.lt_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1184
   i32.const 333
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=4
  i32.const -1
  local.get $1
  i32.shl
  i32.and
  local.tee $1
  if (result i32)
   local.get $0
   local.get $1
   i32.ctz
   local.get $2
   i32.const 4
   i32.shl
   i32.add
   i32.const 2
   i32.shl
   i32.add
   i32.load offset=96
  else
   local.get $0
   i32.load
   i32.const -1
   local.get $2
   i32.const 1
   i32.add
   i32.shl
   i32.and
   local.tee $1
   if (result i32)
    local.get $0
    local.get $1
    i32.ctz
    local.tee $1
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=4
    local.tee $2
    i32.eqz
    if
     i32.const 0
     i32.const 1184
     i32.const 346
     i32.const 18
     call $~lib/builtins/abort
     unreachable
    end
    local.get $0
    local.get $2
    i32.ctz
    local.get $1
    i32.const 4
    i32.shl
    i32.add
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=96
   else
    i32.const 0
   end
  end
 )
 (func $~lib/rt/tlsf/prepareBlock (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  i32.load
  local.set $3
  local.get $2
  i32.const 4
  i32.add
  i32.const 15
  i32.and
  if
   i32.const 0
   i32.const 1184
   i32.const 360
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  i32.const -4
  i32.and
  local.get $2
  i32.sub
  local.tee $4
  i32.const 16
  i32.ge_u
  if
   local.get $1
   local.get $2
   local.get $3
   i32.const 2
   i32.and
   i32.or
   i32.store
   local.get $2
   local.get $1
   i32.const 4
   i32.add
   i32.add
   local.tee $1
   local.get $4
   i32.const 4
   i32.sub
   i32.const 1
   i32.or
   i32.store
   local.get $0
   local.get $1
   call $~lib/rt/tlsf/insertBlock
  else
   local.get $1
   local.get $3
   i32.const -2
   i32.and
   i32.store
   local.get $1
   i32.const 4
   i32.add
   local.tee $0
   local.get $1
   i32.load
   i32.const -4
   i32.and
   i32.add
   local.get $0
   local.get $1
   i32.load
   i32.const -4
   i32.and
   i32.add
   i32.load
   i32.const -3
   i32.and
   i32.store
  end
 )
 (func $~lib/rt/tlsf/allocateBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/prepareSize
  local.tee $2
  call $~lib/rt/tlsf/searchBlock
  local.tee $1
  i32.eqz
  if
   i32.const 4
   memory.size
   local.tee $1
   i32.const 16
   i32.shl
   i32.const 4
   i32.sub
   local.get $0
   i32.load offset=1568
   i32.ne
   i32.shl
   local.get $2
   i32.const 1
   i32.const 27
   local.get $2
   i32.clz
   i32.sub
   i32.shl
   i32.const 1
   i32.sub
   i32.add
   local.get $2
   local.get $2
   i32.const 536870910
   i32.lt_u
   select
   i32.add
   i32.const 65535
   i32.add
   i32.const -65536
   i32.and
   i32.const 16
   i32.shr_u
   local.set $3
   local.get $1
   local.get $3
   local.get $1
   local.get $3
   i32.gt_s
   select
   memory.grow
   i32.const 0
   i32.lt_s
   if
    local.get $3
    memory.grow
    i32.const 0
    i32.lt_s
    if
     unreachable
    end
   end
   local.get $0
   local.get $1
   i32.const 16
   i32.shl
   memory.size
   i32.const 16
   i32.shl
   call $~lib/rt/tlsf/addMemory
   local.get $0
   local.get $2
   call $~lib/rt/tlsf/searchBlock
   local.tee $1
   i32.eqz
   if
    i32.const 0
    i32.const 1184
    i32.const 498
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $2
  local.get $1
  i32.load
  i32.const -4
  i32.and
  i32.gt_u
  if
   i32.const 0
   i32.const 1184
   i32.const 500
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/removeBlock
  local.get $0
  local.get $1
  local.get $2
  call $~lib/rt/tlsf/prepareBlock
  local.get $1
  call $~lib/rt/rtrace/onalloc
  local.get $1
 )
 (func $~lib/rt/pure/__new (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.const 1073741804
  i32.gt_u
  if
   i32.const 1056
   i32.const 1120
   i32.const 275
   i32.const 30
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 16
  i32.add
  local.set $2
  global.get $~lib/rt/tlsf/ROOT
  i32.eqz
  if
   call $~lib/rt/tlsf/initialize
  end
  global.get $~lib/rt/tlsf/ROOT
  local.get $2
  call $~lib/rt/tlsf/allocateBlock
  i32.const 4
  i32.add
  local.tee $3
  i32.const 4
  i32.sub
  local.tee $2
  i32.const 0
  i32.store offset=4
  local.get $2
  i32.const 0
  i32.store offset=8
  local.get $2
  local.get $1
  i32.store offset=12
  local.get $2
  local.get $0
  i32.store offset=16
  local.get $3
  i32.const 16
  i32.add
 )
 (func $~lib/rt/tlsf/checkUsedBlock (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.const 4
  i32.sub
  local.set $1
  local.get $0
  i32.const 15
  i32.and
  i32.eqz
  i32.const 0
  local.get $0
  select
  if (result i32)
   local.get $1
   i32.load
   i32.const 1
   i32.and
   i32.eqz
  else
   i32.const 0
  end
  i32.eqz
  if
   i32.const 0
   i32.const 1184
   i32.const 563
   i32.const 3
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
 )
 (func $~lib/memory/memory.copy (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  block $~lib/util/memory/memmove|inlined.0
   local.get $2
   local.set $4
   local.get $0
   local.get $1
   i32.eq
   br_if $~lib/util/memory/memmove|inlined.0
   local.get $0
   local.get $1
   i32.lt_u
   if
    local.get $1
    i32.const 7
    i32.and
    local.get $0
    i32.const 7
    i32.and
    i32.eq
    if
     loop $while-continue|0
      local.get $0
      i32.const 7
      i32.and
      if
       local.get $4
       i32.eqz
       br_if $~lib/util/memory/memmove|inlined.0
       local.get $4
       i32.const 1
       i32.sub
       local.set $4
       local.get $0
       local.tee $2
       i32.const 1
       i32.add
       local.set $0
       local.get $1
       local.tee $3
       i32.const 1
       i32.add
       local.set $1
       local.get $2
       local.get $3
       i32.load8_u
       i32.store8
       br $while-continue|0
      end
     end
     loop $while-continue|1
      local.get $4
      i32.const 8
      i32.ge_u
      if
       local.get $0
       local.get $1
       i64.load
       i64.store
       local.get $4
       i32.const 8
       i32.sub
       local.set $4
       local.get $0
       i32.const 8
       i32.add
       local.set $0
       local.get $1
       i32.const 8
       i32.add
       local.set $1
       br $while-continue|1
      end
     end
    end
    loop $while-continue|2
     local.get $4
     if
      local.get $0
      local.tee $2
      i32.const 1
      i32.add
      local.set $0
      local.get $1
      local.tee $3
      i32.const 1
      i32.add
      local.set $1
      local.get $2
      local.get $3
      i32.load8_u
      i32.store8
      local.get $4
      i32.const 1
      i32.sub
      local.set $4
      br $while-continue|2
     end
    end
   else
    local.get $1
    i32.const 7
    i32.and
    local.get $0
    i32.const 7
    i32.and
    i32.eq
    if
     loop $while-continue|3
      local.get $0
      local.get $4
      i32.add
      i32.const 7
      i32.and
      if
       local.get $4
       i32.eqz
       br_if $~lib/util/memory/memmove|inlined.0
       local.get $4
       i32.const 1
       i32.sub
       local.tee $4
       local.get $0
       i32.add
       local.get $1
       local.get $4
       i32.add
       i32.load8_u
       i32.store8
       br $while-continue|3
      end
     end
     loop $while-continue|4
      local.get $4
      i32.const 8
      i32.ge_u
      if
       local.get $4
       i32.const 8
       i32.sub
       local.tee $4
       local.get $0
       i32.add
       local.get $1
       local.get $4
       i32.add
       i64.load
       i64.store
       br $while-continue|4
      end
     end
    end
    loop $while-continue|5
     local.get $4
     if
      local.get $4
      i32.const 1
      i32.sub
      local.tee $4
      local.get $0
      i32.add
      local.get $1
      local.get $4
      i32.add
      i32.load8_u
      i32.store8
      br $while-continue|5
     end
    end
   end
  end
 )
 (func $~lib/rt/tlsf/freeBlock (param $0 i32) (param $1 i32)
  local.get $1
  local.get $1
  i32.load
  i32.const 1
  i32.or
  i32.store
  local.get $1
  call $~lib/rt/rtrace/onfree
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/insertBlock
 )
 (func $~lib/rt/tlsf/moveBlock (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  local.get $0
  local.get $2
  call $~lib/rt/tlsf/allocateBlock
  local.tee $2
  i32.const 4
  i32.add
  local.get $1
  i32.const 4
  i32.add
  local.get $1
  i32.load
  i32.const -4
  i32.and
  call $~lib/memory/memory.copy
  local.get $1
  i32.const 2948
  i32.ge_u
  if
   local.get $1
   local.get $2
   call $~lib/rt/rtrace/onmove
   local.get $0
   local.get $1
   call $~lib/rt/tlsf/freeBlock
  end
  local.get $2
 )
 (func $~lib/rt/pure/__renew (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  local.get $1
  i32.const 1073741804
  i32.gt_u
  if
   i32.const 1056
   i32.const 1120
   i32.const 288
   i32.const 30
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 16
  i32.sub
  local.set $0
  global.get $~lib/rt/tlsf/ROOT
  i32.eqz
  if
   call $~lib/rt/tlsf/initialize
  end
  local.get $1
  i32.const 16
  i32.add
  local.set $5
  local.get $0
  i32.const 2948
  i32.lt_u
  if
   global.get $~lib/rt/tlsf/ROOT
   local.get $0
   call $~lib/rt/tlsf/checkUsedBlock
   local.get $5
   call $~lib/rt/tlsf/moveBlock
   local.set $0
  else
   block $__inlined_func$~lib/rt/tlsf/reallocateBlock
    global.get $~lib/rt/tlsf/ROOT
    local.set $2
    local.get $0
    call $~lib/rt/tlsf/checkUsedBlock
    local.set $0
    local.get $5
    call $~lib/rt/tlsf/prepareSize
    local.tee $3
    local.get $0
    i32.load
    local.tee $7
    i32.const -4
    i32.and
    local.tee $4
    i32.le_u
    if
     local.get $2
     local.get $0
     local.get $3
     call $~lib/rt/tlsf/prepareBlock
     local.get $3
     local.get $4
     i32.ne
     if
      local.get $0
      local.get $4
      call $~lib/rt/rtrace/onresize
     end
     br $__inlined_func$~lib/rt/tlsf/reallocateBlock
    end
    local.get $0
    i32.const 4
    i32.add
    local.get $0
    i32.load
    i32.const -4
    i32.and
    i32.add
    local.tee $8
    i32.load
    local.tee $6
    i32.const 1
    i32.and
    if
     local.get $3
     local.get $4
     i32.const 4
     i32.add
     local.get $6
     i32.const -4
     i32.and
     i32.add
     local.tee $6
     i32.le_u
     if
      local.get $2
      local.get $8
      call $~lib/rt/tlsf/removeBlock
      local.get $0
      local.get $6
      local.get $7
      i32.const 3
      i32.and
      i32.or
      i32.store
      local.get $2
      local.get $0
      local.get $3
      call $~lib/rt/tlsf/prepareBlock
      local.get $0
      local.get $4
      call $~lib/rt/rtrace/onresize
      br $__inlined_func$~lib/rt/tlsf/reallocateBlock
     end
    end
    local.get $2
    local.get $0
    local.get $5
    call $~lib/rt/tlsf/moveBlock
    local.set $0
   end
  end
  local.get $0
  i32.const 4
  i32.add
  local.tee $0
  i32.const 4
  i32.sub
  local.get $1
  i32.store offset=16
  local.get $0
  i32.const 16
  i32.add
 )
 (func $~lib/rt/pure/__retain (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  i32.const 2948
  i32.gt_u
  if
   local.get $0
   i32.const 20
   i32.sub
   local.tee $1
   i32.load offset=4
   local.tee $2
   i32.const -268435456
   i32.and
   local.get $2
   i32.const 1
   i32.add
   i32.const -268435456
   i32.and
   i32.ne
   if
    i32.const 0
    i32.const 1120
    i32.const 109
    i32.const 3
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   local.get $2
   i32.const 1
   i32.add
   i32.store offset=4
   local.get $1
   call $~lib/rt/rtrace/onincrement
   local.get $1
   i32.load
   i32.const 1
   i32.and
   if
    i32.const 0
    i32.const 1120
    i32.const 112
    i32.const 14
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
 )
 (func $~lib/rt/pure/__release (param $0 i32)
  local.get $0
  i32.const 2948
  i32.gt_u
  if
   local.get $0
   i32.const 20
   i32.sub
   call $~lib/rt/pure/decrement
  end
 )
 (func $assembly/index/Range#constructor (param $0 f64) (param $1 f64) (result i32)
  (local $2 i32)
  i32.const 16
  i32.const 5
  call $~lib/rt/pure/__new
  call $~lib/rt/pure/__retain
  local.tee $2
  f64.const 0
  f64.store
  local.get $2
  f64.const 0
  f64.store offset=8
  local.get $2
  local.get $0
  f64.store
  local.get $2
  local.get $1
  f64.store offset=8
  local.get $2
 )
 (func $~lib/memory/memory.fill (param $0 i32) (param $1 i32)
  (local $2 i32)
  block $~lib/util/memory/memset|inlined.0
   local.get $1
   i32.eqz
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store8
   local.get $0
   local.get $1
   i32.add
   i32.const 4
   i32.sub
   local.tee $2
   i32.const 0
   i32.store8 offset=3
   local.get $1
   i32.const 2
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store8 offset=1
   local.get $0
   i32.const 0
   i32.store8 offset=2
   local.get $2
   i32.const 0
   i32.store8 offset=2
   local.get $2
   i32.const 0
   i32.store8 offset=1
   local.get $1
   i32.const 6
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store8 offset=3
   local.get $2
   i32.const 0
   i32.store8
   local.get $1
   i32.const 8
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   local.get $0
   i32.sub
   i32.const 3
   i32.and
   local.tee $2
   i32.add
   local.tee $0
   i32.const 0
   i32.store
   local.get $0
   local.get $1
   local.get $2
   i32.sub
   i32.const -4
   i32.and
   local.tee $2
   i32.add
   i32.const 28
   i32.sub
   local.tee $1
   i32.const 0
   i32.store offset=24
   local.get $2
   i32.const 8
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store offset=4
   local.get $0
   i32.const 0
   i32.store offset=8
   local.get $1
   i32.const 0
   i32.store offset=16
   local.get $1
   i32.const 0
   i32.store offset=20
   local.get $2
   i32.const 24
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store offset=12
   local.get $0
   i32.const 0
   i32.store offset=16
   local.get $0
   i32.const 0
   i32.store offset=20
   local.get $0
   i32.const 0
   i32.store offset=24
   local.get $1
   i32.const 0
   i32.store
   local.get $1
   i32.const 0
   i32.store offset=4
   local.get $1
   i32.const 0
   i32.store offset=8
   local.get $1
   i32.const 0
   i32.store offset=12
   local.get $0
   local.get $0
   i32.const 4
   i32.and
   i32.const 24
   i32.add
   local.tee $1
   i32.add
   local.set $0
   local.get $2
   local.get $1
   i32.sub
   local.set $1
   loop $while-continue|0
    local.get $1
    i32.const 32
    i32.ge_u
    if
     local.get $0
     i64.const 0
     i64.store
     local.get $0
     i64.const 0
     i64.store offset=8
     local.get $0
     i64.const 0
     i64.store offset=16
     local.get $0
     i64.const 0
     i64.store offset=24
     local.get $1
     i32.const 32
     i32.sub
     local.set $1
     local.get $0
     i32.const 32
     i32.add
     local.set $0
     br $while-continue|0
    end
   end
  end
 )
 (func $~lib/typedarray/Uint8ClampedArray#constructor (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  i32.const 12
  i32.const 3
  call $~lib/rt/pure/__new
  call $~lib/rt/pure/__retain
  local.tee $1
  i32.eqz
  if
   i32.const 12
   i32.const 2
   call $~lib/rt/pure/__new
   call $~lib/rt/pure/__retain
   local.set $1
  end
  local.get $1
  i32.const 0
  i32.store
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.store offset=8
  local.get $0
  i32.const 1073741820
  i32.gt_u
  if
   i32.const 1408
   i32.const 1456
   i32.const 18
   i32.const 57
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 0
  call $~lib/rt/pure/__new
  local.tee $2
  local.get $0
  call $~lib/memory/memory.fill
  local.get $2
  local.set $3
  local.get $2
  local.get $1
  i32.load
  local.tee $4
  i32.ne
  if
   local.get $3
   call $~lib/rt/pure/__retain
   local.set $3
   local.get $4
   call $~lib/rt/pure/__release
  end
  local.get $1
  local.get $3
  i32.store
  local.get $1
  local.get $2
  i32.store offset=4
  local.get $1
  local.get $0
  i32.store offset=8
  local.get $1
 )
 (func $assembly/complex/Complex#constructor (param $0 f64) (param $1 f64) (result i32)
  (local $2 i32)
  i32.const 16
  i32.const 6
  call $~lib/rt/pure/__new
  call $~lib/rt/pure/__retain
  local.tee $2
  f64.const 0
  f64.store
  local.get $2
  f64.const 0
  f64.store offset=8
  local.get $2
  local.get $0
  f64.store
  local.get $2
  local.get $1
  f64.store offset=8
  local.get $2
 )
 (func $assembly/complex/Complex#goesToInfinity (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 f64)
  (local $4 i32)
  (local $5 i32)
  (local $6 f64)
  local.get $0
  f64.load
  local.get $0
  f64.load offset=8
  call $assembly/complex/Complex#constructor
  local.set $1
  loop $for-loop|0
   local.get $2
   i32.const 50
   i32.lt_s
   if
    local.get $0
    call $~lib/rt/pure/__retain
    local.set $5
    local.get $1
    local.get $1
    f64.load
    local.tee $3
    local.get $3
    f64.mul
    local.get $1
    f64.load offset=8
    local.tee $6
    local.get $6
    f64.mul
    f64.sub
    f64.store
    local.get $1
    local.get $3
    local.get $3
    f64.add
    local.get $6
    f64.mul
    f64.store offset=8
    local.get $5
    call $~lib/rt/pure/__retain
    local.set $4
    local.get $1
    local.get $1
    f64.load
    local.get $4
    f64.load
    f64.add
    f64.store
    local.get $1
    local.get $1
    f64.load offset=8
    local.get $4
    f64.load offset=8
    f64.add
    f64.store offset=8
    local.get $4
    call $~lib/rt/pure/__release
    local.get $5
    call $~lib/rt/pure/__release
    local.get $1
    f64.load
    f64.const 2
    f64.gt
    if (result i32)
     i32.const 1
    else
     local.get $1
     f64.load
     f64.const -2
     f64.lt
    end
    if (result i32)
     i32.const 1
    else
     local.get $1
     f64.load offset=8
     f64.const 2
     f64.gt
    end
    if (result i32)
     i32.const 1
    else
     local.get $1
     f64.load offset=8
     f64.const -2
     f64.lt
    end
    if
     local.get $1
     call $~lib/rt/pure/__release
     local.get $2
     return
    end
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    br $for-loop|0
   end
  end
  local.get $1
  call $~lib/rt/pure/__release
  i32.const -1
 )
 (func $~lib/typedarray/Uint8ClampedArray#__uset (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $1
  local.get $0
  i32.load offset=4
  i32.add
  local.get $2
  i32.const 255
  local.get $2
  i32.sub
  i32.const 31
  i32.shr_s
  i32.or
  local.get $2
  i32.const 31
  i32.shr_s
  i32.const -1
  i32.xor
  i32.and
  i32.store8
 )
 (func $~lib/math/NativeMath.mod (param $0 f64) (result f64)
  (local $1 i64)
  (local $2 i64)
  (local $3 i64)
  (local $4 i64)
  local.get $0
  i64.reinterpret_f64
  local.tee $1
  i64.const 63
  i64.shr_u
  local.set $4
  local.get $1
  i64.const 52
  i64.shr_u
  i64.const 2047
  i64.and
  local.tee $2
  i64.const 2047
  i64.eq
  if
   local.get $0
   f64.const 6
   f64.mul
   local.tee $0
   local.get $0
   f64.div
   return
  end
  local.get $1
  i64.const 1
  i64.shl
  local.tee $3
  i64.const -9209861237972664320
  i64.le_u
  if
   local.get $0
   local.get $3
   i64.const -9209861237972664320
   i64.ne
   f64.convert_i32_u
   f64.mul
   return
  end
  local.get $2
  i64.eqz
  if (result i64)
   local.get $1
   i64.const 1
   local.get $2
   local.get $1
   i64.const 12
   i64.shl
   i64.clz
   i64.sub
   local.tee $2
   i64.sub
   i64.shl
  else
   local.get $1
   i64.const 4503599627370495
   i64.and
   i64.const 4503599627370496
   i64.or
  end
  local.set $1
  block $folding-inner0
   loop $while-continue|0
    local.get $2
    i64.const 1025
    i64.gt_s
    if
     local.get $1
     i64.const 6755399441055744
     i64.ge_u
     if (result i64)
      local.get $1
      i64.const 6755399441055744
      i64.eq
      br_if $folding-inner0
      local.get $1
      i64.const 6755399441055744
      i64.sub
     else
      local.get $1
     end
     i64.const 1
     i64.shl
     local.set $1
     local.get $2
     i64.const 1
     i64.sub
     local.set $2
     br $while-continue|0
    end
   end
   local.get $1
   i64.const 6755399441055744
   i64.ge_u
   if
    local.get $1
    i64.const 6755399441055744
    i64.eq
    br_if $folding-inner0
    local.get $1
    i64.const 6755399441055744
    i64.sub
    local.set $1
   end
   local.get $1
   local.get $1
   i64.const 11
   i64.shl
   i64.clz
   local.tee $3
   i64.shl
   local.set $1
   local.get $2
   local.get $3
   i64.sub
   local.tee $2
   i64.const 0
   i64.gt_s
   if (result i64)
    local.get $1
    i64.const 4503599627370496
    i64.sub
    local.get $2
    i64.const 52
    i64.shl
    i64.or
   else
    local.get $1
    i64.const 1
    local.get $2
    i64.sub
    i64.shr_u
   end
   local.get $4
   i64.const 63
   i64.shl
   i64.or
   f64.reinterpret_i64
   return
  end
  local.get $0
  f64.const 0
  f64.mul
 )
 (func $assembly/hue2rgb/f (param $0 i32) (param $1 f64) (result f64)
  (local $2 f64)
  f64.const 4
  local.get $0
  f64.convert_i32_u
  local.get $1
  f64.const 60
  f64.div
  f64.add
  call $~lib/math/NativeMath.mod
  local.tee $1
  f64.sub
  local.set $2
  f64.const 1
  f64.const 0
  local.get $1
  local.get $2
  f64.min
  f64.const 1
  f64.min
  f64.max
  f64.sub
 )
 (func $~lib/rt/__newArray (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (local $4 i32)
  (local $5 i32)
  i32.const 16
  local.get $2
  call $~lib/rt/pure/__new
  local.tee $2
  local.get $0
  local.get $1
  i32.shl
  local.tee $4
  local.set $5
  local.get $4
  i32.const 0
  call $~lib/rt/pure/__new
  local.set $1
  local.get $3
  if
   local.get $1
   local.get $3
   local.get $5
   call $~lib/memory/memory.copy
  end
  local.get $1
  call $~lib/rt/pure/__retain
  i32.store
  local.get $2
  local.get $1
  i32.store offset=4
  local.get $2
  local.get $4
  i32.store offset=8
  local.get $2
  local.get $0
  i32.store offset=12
  local.get $2
 )
 (func $assembly/index/generate (param $0 i32) (param $1 i32) (param $2 f64) (param $3 f64) (param $4 f64) (param $5 i32) (param $6 i32) (param $7 i32) (result i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
  (local $15 i32)
  (local $16 i32)
  (local $17 f64)
  f64.const -0.5
  local.get $2
  f64.div
  local.tee $17
  local.get $3
  f64.add
  f64.const 0.5
  local.get $2
  f64.div
  local.tee $2
  local.get $3
  f64.add
  call $assembly/index/Range#constructor
  local.set $13
  local.get $17
  local.get $4
  f64.add
  local.get $2
  local.get $4
  f64.add
  call $assembly/index/Range#constructor
  local.set $14
  local.get $1
  local.get $6
  i32.const 255
  i32.and
  local.tee $8
  i32.div_u
  f64.convert_i32_u
  f64.ceil
  local.get $7
  f64.convert_i32_u
  f64.mul
  i32.trunc_f64_u
  local.set $9
  local.get $0
  local.get $8
  local.get $7
  i32.const 1
  i32.add
  i32.const 255
  i32.and
  i32.gt_u
  if (result i32)
   local.get $1
   local.get $6
   i32.const 255
   i32.and
   i32.div_u
   f64.convert_i32_u
   f64.ceil
   local.get $7
   i32.const 1
   i32.add
   f64.convert_i32_u
   f64.mul
   i32.trunc_f64_u
  else
   local.get $1
  end
  local.tee $8
  local.get $9
  i32.sub
  i32.mul
  i32.const 2
  i32.shl
  call $~lib/typedarray/Uint8ClampedArray#constructor
  local.set $10
  local.get $9
  local.set $7
  loop $for-loop|0
   local.get $7
   local.get $8
   i32.lt_u
   if
    local.get $14
    f64.load
    local.get $1
    local.get $7
    i32.sub
    f64.convert_i32_u
    local.get $14
    f64.load offset=8
    local.get $14
    f64.load
    f64.sub
    f64.mul
    local.get $1
    f64.convert_i32_u
    f64.div
    f64.add
    local.set $3
    i32.const 0
    local.set $12
    loop $for-loop|1
     local.get $0
     local.get $12
     i32.gt_u
     if
      local.get $13
      f64.load
      local.get $12
      f64.convert_i32_u
      local.get $13
      f64.load offset=8
      local.get $13
      f64.load
      f64.sub
      f64.mul
      local.get $0
      f64.convert_i32_u
      f64.div
      f64.add
      local.get $3
      call $assembly/complex/Complex#constructor
      local.set $15
      local.get $12
      local.get $0
      local.get $7
      local.get $9
      i32.sub
      i32.mul
      i32.add
      i32.const 2
      i32.shl
      local.set $11
      local.get $15
      call $assembly/complex/Complex#goesToInfinity
      local.tee $6
      i32.const -1
      i32.eq
      if
       local.get $10
       local.get $11
       i32.const 0
       call $~lib/typedarray/Uint8ClampedArray#__uset
       local.get $10
       local.get $11
       i32.const 1
       i32.add
       i32.const 0
       call $~lib/typedarray/Uint8ClampedArray#__uset
       local.get $10
       local.get $11
       i32.const 2
       i32.add
       i32.const 0
       call $~lib/typedarray/Uint8ClampedArray#__uset
      else
       local.get $5
       if
        local.get $6
        f64.convert_i32_s
        f64.const 50
        f64.div
        f64.const 300
        f64.mul
        f32.demote_f64
        f64.promote_f32
        local.set $2
        i32.const 3
        i32.const 0
        i32.const 7
        i32.const 0
        call $~lib/rt/__newArray
        call $~lib/rt/pure/__retain
        local.tee $6
        i32.load offset=4
        local.tee $16
        i32.const 5
        local.get $2
        call $assembly/hue2rgb/f
        f64.const 255
        f64.mul
        i32.trunc_f64_u
        i32.store8
        local.get $16
        i32.const 3
        local.get $2
        call $assembly/hue2rgb/f
        f64.const 255
        f64.mul
        i32.trunc_f64_u
        i32.store8 offset=1
        local.get $16
        i32.const 1
        local.get $2
        call $assembly/hue2rgb/f
        f64.const 255
        f64.mul
        i32.trunc_f64_u
        i32.store8 offset=2
       else
        i32.const 3
        i32.const 0
        i32.const 7
        i32.const 1520
        call $~lib/rt/__newArray
        call $~lib/rt/pure/__retain
        local.set $6
       end
       local.get $10
       local.get $11
       local.get $6
       i32.load offset=4
       i32.load8_u
       call $~lib/typedarray/Uint8ClampedArray#__uset
       local.get $10
       local.get $11
       i32.const 1
       i32.add
       local.get $6
       i32.load offset=4
       i32.load8_u offset=1
       call $~lib/typedarray/Uint8ClampedArray#__uset
       local.get $10
       local.get $11
       i32.const 2
       i32.add
       local.get $6
       i32.load offset=4
       i32.load8_u offset=2
       call $~lib/typedarray/Uint8ClampedArray#__uset
       local.get $6
       call $~lib/rt/pure/__release
      end
      local.get $10
      local.get $11
      i32.const 3
      i32.add
      i32.const 255
      call $~lib/typedarray/Uint8ClampedArray#__uset
      local.get $15
      call $~lib/rt/pure/__release
      local.get $12
      i32.const 1
      i32.add
      local.set $12
      br $for-loop|1
     end
    end
    local.get $7
    i32.const 1
    i32.add
    local.set $7
    br $for-loop|0
   end
  end
  local.get $13
  call $~lib/rt/pure/__release
  local.get $14
  call $~lib/rt/pure/__release
  local.get $10
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Expectation/expect<~lib/typedarray/Uint8ClampedArray> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $2
  i32.const 8
  i32.const 4
  call $~lib/rt/pure/__new
  call $~lib/rt/pure/__retain
  local.tee $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $2
  call $~lib/rt/pure/__retain
  local.tee $3
  local.tee $1
  local.get $0
  i32.load offset=4
  local.tee $4
  i32.ne
  if
   local.get $1
   call $~lib/rt/pure/__retain
   local.set $1
   local.get $4
   call $~lib/rt/pure/__release
  end
  local.get $0
  local.get $1
  i32.store offset=4
  local.get $3
  call $~lib/rt/pure/__release
  local.get $2
  call $~lib/rt/pure/__release
  local.get $0
 )
 (func $assembly/__tests__/index.test/u8caFromArray (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.tee $2
  i32.load offset=12
  call $~lib/typedarray/Uint8ClampedArray#constructor
  local.set $3
  loop $for-loop|0
   local.get $1
   local.get $2
   i32.load offset=12
   i32.lt_s
   if
    local.get $1
    local.get $2
    i32.load offset=12
    i32.ge_u
    if
     i32.const 1584
     i32.const 1648
     i32.const 104
     i32.const 42
     call $~lib/builtins/abort
     unreachable
    end
    local.get $1
    local.get $2
    i32.load offset=4
    i32.add
    i32.load8_u
    local.set $0
    local.get $1
    local.get $3
    i32.load offset=8
    i32.ge_u
    if
     i32.const 1584
     i32.const 1696
     i32.const 291
     i32.const 45
     call $~lib/builtins/abort
     unreachable
    end
    local.get $1
    local.get $3
    i32.load offset=4
    i32.add
    local.get $0
    i32.const 255
    local.get $0
    i32.sub
    i32.const 31
    i32.shr_s
    i32.or
    local.get $0
    i32.const 31
    i32.shr_s
    i32.const -1
    i32.xor
    i32.and
    i32.store8
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    br $for-loop|0
   end
  end
  local.get $2
  call $~lib/rt/pure/__release
  local.get $3
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/assert/assert (param $0 i32) (param $1 i32)
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $1
  local.get $0
  i32.eqz
  if
   local.get $1
   i32.const 1840
   i32.const 2
   i32.const 19
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  call $~lib/rt/pure/__release
 )
 (func $~lib/array/Array<usize>#__uget (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Reflect/pairSeen (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  local.get $0
  local.get $2
  i32.eq
  local.get $1
  local.get $3
  i32.eq
  i32.and
  local.get $0
  local.get $3
  i32.eq
  local.get $1
  local.get $2
  i32.eq
  i32.and
  i32.or
 )
 (func $~lib/array/Array<usize>#push (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  local.get $0
  i32.load offset=12
  local.tee $6
  i32.const 1
  i32.add
  local.tee $3
  local.set $2
  local.get $3
  local.get $0
  i32.load offset=8
  local.tee $4
  i32.const 2
  i32.shr_u
  i32.gt_u
  if
   local.get $2
   i32.const 268435455
   i32.gt_u
   if
    i32.const 1408
    i32.const 1648
    i32.const 14
    i32.const 48
    call $~lib/builtins/abort
    unreachable
   end
   local.get $4
   local.get $0
   i32.load
   local.tee $7
   local.get $2
   i32.const 2
   i32.shl
   local.tee $5
   call $~lib/rt/pure/__renew
   local.tee $2
   i32.add
   local.get $5
   local.get $4
   i32.sub
   call $~lib/memory/memory.fill
   local.get $2
   local.get $7
   i32.ne
   if
    local.get $0
    local.get $2
    i32.store
    local.get $0
    local.get $2
    i32.store offset=4
   end
   local.get $0
   local.get $5
   i32.store offset=8
  end
  local.get $0
  i32.load offset=4
  local.get $6
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  i32.store
  local.get $0
  local.get $3
  i32.store offset=12
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Reflect/referencesEqual<~lib/typedarray/Uint8ClampedArray> (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $0
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $1
  local.get $2
  call $~lib/rt/pure/__retain
  local.set $5
  local.get $3
  call $~lib/rt/pure/__retain
  local.tee $2
  i32.load offset=12
  local.tee $3
  local.set $7
  local.get $3
  i32.const 1
  i32.and
  i32.eqz
  i32.const 1760
  call $node_modules/@as-pect/assembly/assembly/internal/assert/assert
  block $folding-inner1
   loop $for-loop|0
    local.get $4
    local.get $7
    i32.lt_s
    if
     local.get $0
     local.get $1
     local.get $2
     local.get $4
     call $~lib/array/Array<usize>#__uget
     local.get $2
     local.get $4
     i32.const 1
     i32.add
     call $~lib/array/Array<usize>#__uget
     call $node_modules/@as-pect/assembly/assembly/internal/Reflect/pairSeen
     br_if $folding-inner1
     local.get $4
     i32.const 2
     i32.add
     local.set $4
     br $for-loop|0
    end
   end
   local.get $5
   i32.load offset=12
   local.set $3
   i32.const 0
   local.set $4
   loop $for-loop|1
    local.get $3
    local.get $4
    i32.gt_s
    if
     local.get $0
     local.get $1
     local.get $5
     local.get $4
     call $~lib/array/Array<usize>#__uget
     local.get $5
     local.get $4
     i32.const 1
     i32.add
     call $~lib/array/Array<usize>#__uget
     call $node_modules/@as-pect/assembly/assembly/internal/Reflect/pairSeen
     if
      local.get $0
      call $~lib/rt/pure/__release
      local.get $1
      call $~lib/rt/pure/__release
      local.get $5
      call $~lib/rt/pure/__release
      local.get $2
      call $~lib/rt/pure/__release
      i32.const 2
      return
     end
     local.get $4
     i32.const 2
     i32.add
     local.set $4
     br $for-loop|1
    end
   end
   block $folding-inner0
    local.get $0
    i32.load offset=8
    local.tee $7
    local.get $1
    i32.load offset=8
    i32.ne
    br_if $folding-inner0
    loop $for-loop|2
     local.get $6
     local.get $7
     i32.lt_s
     if
      local.get $6
      local.get $0
      i32.load offset=4
      i32.add
      i32.load8_u
      local.set $8
      local.get $6
      local.get $1
      i32.load offset=4
      i32.add
      i32.load8_u
      local.set $9
      block $__inlined_func$node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.equals<u8> (result i32)
       local.get $5
       call $~lib/rt/pure/__retain
       local.set $3
       local.get $2
       call $~lib/rt/pure/__retain
       local.set $4
       local.get $8
       local.get $9
       i32.eq
       if
        local.get $3
        call $~lib/rt/pure/__release
        local.get $4
        call $~lib/rt/pure/__release
        i32.const 1
        br $__inlined_func$node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.equals<u8>
       end
       local.get $3
       call $~lib/rt/pure/__release
       local.get $4
       call $~lib/rt/pure/__release
       i32.const 0
      end
      i32.eqz
      br_if $folding-inner0
      local.get $6
      i32.const 1
      i32.add
      local.set $6
      br $for-loop|2
     end
    end
    local.get $2
    local.get $0
    call $~lib/array/Array<usize>#push
    local.get $2
    local.get $1
    call $~lib/array/Array<usize>#push
    br $folding-inner1
   end
   local.get $0
   call $~lib/rt/pure/__release
   local.get $1
   call $~lib/rt/pure/__release
   local.get $5
   call $~lib/rt/pure/__release
   local.get $2
   call $~lib/rt/pure/__release
   i32.const 0
   return
  end
  local.get $0
  call $~lib/rt/pure/__release
  local.get $1
  call $~lib/rt/pure/__release
  local.get $5
  call $~lib/rt/pure/__release
  local.get $2
  call $~lib/rt/pure/__release
  i32.const 1
 )
 (func $~lib/util/hash/hash32 (param $0 i32) (result i32)
  local.get $0
  i32.const 255
  i32.and
  i32.const -2128831035
  i32.xor
  i32.const 16777619
  i32.mul
  local.get $0
  i32.const 8
  i32.shr_u
  i32.const 255
  i32.and
  i32.xor
  i32.const 16777619
  i32.mul
  local.get $0
  i32.const 16
  i32.shr_u
  i32.const 255
  i32.and
  i32.xor
  i32.const 16777619
  i32.mul
  local.get $0
  i32.const 24
  i32.shr_u
  i32.xor
  i32.const 16777619
  i32.mul
 )
 (func $~lib/map/Map<usize,i32>#find (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  local.get $0
  i32.load
  local.get $2
  local.get $0
  i32.load offset=4
  i32.and
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.set $0
  loop $while-continue|0
   local.get $0
   if
    local.get $0
    i32.load offset=8
    i32.const 1
    i32.and
    if (result i32)
     i32.const 0
    else
     local.get $1
     local.get $0
     i32.load
     i32.eq
    end
    if
     local.get $0
     return
    end
    local.get $0
    i32.load offset=8
    i32.const -2
    i32.and
    local.set $0
    br $while-continue|0
   end
  end
  i32.const 0
 )
 (func $~lib/arraybuffer/ArrayBuffer#constructor (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.const 1073741820
  i32.gt_u
  if
   i32.const 1408
   i32.const 1456
   i32.const 49
   i32.const 43
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 0
  call $~lib/rt/pure/__new
  local.tee $1
  local.get $0
  call $~lib/memory/memory.fill
  local.get $1
  call $~lib/rt/pure/__retain
 )
 (func $~lib/map/Map<usize,i32>#rehash (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  local.get $1
  i32.const 1
  i32.add
  local.tee $3
  i32.const 2
  i32.shl
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.set $5
  local.get $3
  i32.const 3
  i32.shl
  i32.const 3
  i32.div_s
  local.tee $6
  i32.const 12
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.set $3
  local.get $0
  i32.load offset=8
  local.tee $4
  local.get $0
  i32.load offset=16
  i32.const 12
  i32.mul
  i32.add
  local.set $7
  local.get $3
  local.set $2
  loop $while-continue|0
   local.get $4
   local.get $7
   i32.ne
   if
    local.get $4
    i32.load offset=8
    i32.const 1
    i32.and
    i32.eqz
    if
     local.get $2
     local.get $4
     i32.load
     i32.store
     local.get $2
     local.get $4
     i32.load offset=4
     i32.store offset=4
     local.get $2
     local.get $5
     local.get $4
     i32.load
     call $~lib/util/hash/hash32
     local.get $1
     i32.and
     i32.const 2
     i32.shl
     i32.add
     local.tee $8
     i32.load
     i32.store offset=8
     local.get $8
     local.get $2
     i32.store
     local.get $2
     i32.const 12
     i32.add
     local.set $2
    end
    local.get $4
    i32.const 12
    i32.add
    local.set $4
    br $while-continue|0
   end
  end
  local.get $5
  local.tee $4
  local.get $0
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $4
   call $~lib/rt/pure/__retain
   local.set $4
   local.get $2
   call $~lib/rt/pure/__release
  end
  local.get $0
  local.get $4
  i32.store
  local.get $0
  local.get $1
  i32.store offset=4
  local.get $3
  local.tee $1
  local.get $0
  i32.load offset=8
  local.tee $4
  i32.ne
  if
   local.get $1
   call $~lib/rt/pure/__retain
   local.set $1
   local.get $4
   call $~lib/rt/pure/__release
  end
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $0
  local.get $6
  i32.store offset=12
  local.get $0
  local.get $0
  i32.load offset=20
  i32.store offset=16
  local.get $5
  call $~lib/rt/pure/__release
  local.get $3
  call $~lib/rt/pure/__release
 )
 (func $~lib/map/Map<usize,i32>#set (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  local.get $1
  local.get $1
  call $~lib/util/hash/hash32
  local.tee $5
  call $~lib/map/Map<usize,i32>#find
  local.tee $3
  if
   local.get $3
   local.get $2
   i32.store offset=4
  else
   local.get $0
   i32.load offset=16
   local.get $0
   i32.load offset=12
   i32.eq
   if
    local.get $0
    local.get $0
    i32.load offset=20
    local.get $0
    i32.load offset=12
    i32.const 3
    i32.mul
    i32.const 4
    i32.div_s
    i32.lt_s
    if (result i32)
     local.get $0
     i32.load offset=4
    else
     local.get $0
     i32.load offset=4
     i32.const 1
     i32.shl
     i32.const 1
     i32.or
    end
    call $~lib/map/Map<usize,i32>#rehash
   end
   local.get $0
   i32.load offset=8
   call $~lib/rt/pure/__retain
   local.set $4
   local.get $0
   local.get $0
   i32.load offset=16
   local.tee $3
   i32.const 1
   i32.add
   i32.store offset=16
   local.get $4
   local.get $3
   i32.const 12
   i32.mul
   i32.add
   local.tee $3
   local.get $1
   i32.store
   local.get $3
   local.get $2
   i32.store offset=4
   local.get $0
   local.get $0
   i32.load offset=20
   i32.const 1
   i32.add
   i32.store offset=20
   local.get $3
   local.get $0
   i32.load
   local.get $5
   local.get $0
   i32.load offset=4
   i32.and
   i32.const 2
   i32.shl
   i32.add
   local.tee $1
   i32.load
   i32.store offset=8
   local.get $1
   local.get $3
   i32.store
   local.get $4
   call $~lib/rt/pure/__release
  end
  local.get $0
  call $~lib/rt/pure/__retain
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.toReflectedValue<~lib/typedarray/Uint8ClampedArray> (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $0
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $1
  block $folding-inner0
   local.get $0
   i32.eqz
   if
    i32.const 1
    i32.const 0
    i32.const 0
    i32.const 0
    i32.const 0
    i32.const 0
    i32.const 4
    i32.const 1
    i32.const 3
    i32.const 2048
    i32.const 0
    i32.const 0
    i32.const 1
    call $node_modules/@as-pect/assembly/assembly/internal/Reflect/createReflectedValue
    local.set $2
    br $folding-inner0
   end
   local.get $1
   local.get $0
   local.get $0
   call $~lib/util/hash/hash32
   call $~lib/map/Map<usize,i32>#find
   if
    local.get $1
    local.get $0
    local.get $0
    call $~lib/util/hash/hash32
    call $~lib/map/Map<usize,i32>#find
    local.tee $2
    i32.eqz
    if
     i32.const 2112
     i32.const 2176
     i32.const 104
     i32.const 17
     call $~lib/builtins/abort
     unreachable
    end
    local.get $2
    i32.load offset=4
    local.set $2
    br $folding-inner0
   end
   local.get $0
   i32.load offset=8
   local.tee $3
   local.set $5
   local.get $1
   local.get $0
   i32.const 0
   i32.const 0
   i32.const 0
   i32.const 0
   local.get $0
   i32.const 0
   local.get $3
   i32.const 11
   i32.const 3
   i32.const 2048
   i32.const 0
   i32.const 1
   i32.const 1
   call $node_modules/@as-pect/assembly/assembly/internal/Reflect/createReflectedValue
   local.tee $3
   call $~lib/map/Map<usize,i32>#set
   call $~lib/rt/pure/__release
   loop $for-loop|0
    local.get $2
    local.get $5
    i32.lt_s
    if
     local.get $2
     local.get $0
     i32.load offset=4
     i32.add
     i32.load8_u
     local.set $4
     local.get $1
     call $~lib/rt/pure/__retain
     i32.const 0
     i32.const 1
     i32.const 7
     i32.const 2224
     local.get $4
     f64.convert_i32_u
     call $node_modules/@as-pect/assembly/assembly/internal/Reflect/createReflectedNumber
     local.set $4
     call $~lib/rt/pure/__release
     local.get $3
     local.get $4
     call $node_modules/@as-pect/assembly/assembly/internal/Reflect/__aspectPushReflectedObjectValue
     local.get $2
     i32.const 1
     i32.add
     local.set $2
     br $for-loop|0
    end
   end
   local.get $0
   call $~lib/rt/pure/__release
   local.get $1
   call $~lib/rt/pure/__release
   local.get $3
   return
  end
  local.get $0
  call $~lib/rt/pure/__release
  local.get $1
  call $~lib/rt/pure/__release
  local.get $2
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.toReflectedValue<~lib/typedarray/Uint8ClampedArray>@varargs (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  block $1of1
   block $0of1
    block $outOfRange
     global.get $~argumentsLength
     i32.const 1
     i32.sub
     br_table $0of1 $1of1 $outOfRange
    end
    unreachable
   end
   i32.const 24
   i32.const 10
   call $~lib/rt/pure/__new
   call $~lib/rt/pure/__retain
   local.tee $1
   i32.const 16
   call $~lib/arraybuffer/ArrayBuffer#constructor
   i32.store
   local.get $1
   i32.const 3
   i32.store offset=4
   local.get $1
   i32.const 48
   call $~lib/arraybuffer/ArrayBuffer#constructor
   i32.store offset=8
   local.get $1
   i32.const 4
   i32.store offset=12
   local.get $1
   i32.const 0
   i32.store offset=16
   local.get $1
   i32.const 0
   i32.store offset=20
   local.get $1
   local.set $2
  end
  local.get $0
  local.get $2
  call $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.toReflectedValue<~lib/typedarray/Uint8ClampedArray>
  local.get $1
  call $~lib/rt/pure/__release
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/typedarray/Uint8ClampedArray>#toStrictEqual (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $6
  local.get $0
  i32.load offset=4
  i32.const 2
  global.set $~argumentsLength
  i32.const 0
  i32.const 2
  i32.const 9
  i32.const 1984
  call $~lib/rt/__newArray
  call $~lib/rt/pure/__retain
  local.set $7
  i32.const 0
  i32.const 2
  i32.const 9
  i32.const 2016
  call $~lib/rt/__newArray
  call $~lib/rt/pure/__retain
  local.set $8
  call $~lib/rt/pure/__retain
  local.set $3
  local.get $6
  call $~lib/rt/pure/__retain
  local.set $2
  local.get $7
  call $~lib/rt/pure/__retain
  local.set $4
  local.get $8
  call $~lib/rt/pure/__retain
  local.set $5
  block $__inlined_func$node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.equals<~lib/typedarray/Uint8ClampedArray>
   local.get $2
   local.get $3
   i32.eq
   if
    local.get $3
    call $~lib/rt/pure/__release
    local.get $2
    call $~lib/rt/pure/__release
    local.get $4
    call $~lib/rt/pure/__release
    local.get $5
    call $~lib/rt/pure/__release
    i32.const 1
    local.set $1
    br $__inlined_func$node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.equals<~lib/typedarray/Uint8ClampedArray>
   end
   local.get $3
   i32.eqz
   local.get $2
   i32.eqz
   i32.xor
   if
    local.get $3
    call $~lib/rt/pure/__release
    local.get $2
    call $~lib/rt/pure/__release
    local.get $4
    call $~lib/rt/pure/__release
    local.get $5
    call $~lib/rt/pure/__release
    i32.const 0
    local.set $1
    br $__inlined_func$node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.equals<~lib/typedarray/Uint8ClampedArray>
   end
   local.get $3
   local.get $2
   local.get $4
   local.get $5
   call $node_modules/@as-pect/assembly/assembly/internal/Reflect/referencesEqual<~lib/typedarray/Uint8ClampedArray>
   local.set $1
   local.get $3
   call $~lib/rt/pure/__release
   local.get $2
   call $~lib/rt/pure/__release
   local.get $4
   call $~lib/rt/pure/__release
   local.get $5
   call $~lib/rt/pure/__release
  end
  local.get $7
  call $~lib/rt/pure/__release
  local.get $8
  call $~lib/rt/pure/__release
  local.get $1
  i32.const 1
  i32.eq
  local.get $0
  i32.load offset=4
  call $~lib/rt/pure/__retain
  local.set $1
  i32.const 1
  global.set $~argumentsLength
  local.get $1
  call $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.toReflectedValue<~lib/typedarray/Uint8ClampedArray>@varargs
  local.tee $2
  call $node_modules/@as-pect/assembly/assembly/internal/Reflect/attachStackTraceToReflectedValue
  local.get $2
  call $node_modules/@as-pect/assembly/assembly/internal/Actual/reportActualReflectedValue
  local.get $1
  call $~lib/rt/pure/__release
  local.get $6
  call $~lib/rt/pure/__retain
  local.set $1
  i32.const 1
  global.set $~argumentsLength
  local.get $1
  call $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.toReflectedValue<~lib/typedarray/Uint8ClampedArray>@varargs
  local.tee $2
  call $node_modules/@as-pect/assembly/assembly/internal/Reflect/attachStackTraceToReflectedValue
  local.get $2
  i32.const 0
  call $node_modules/@as-pect/assembly/assembly/internal/Expected/reportExpectedReflectedValue
  local.get $1
  call $~lib/rt/pure/__release
  local.get $0
  i32.load
  i32.xor
  i32.const 2256
  call $node_modules/@as-pect/assembly/assembly/internal/assert/assert
  call $node_modules/@as-pect/assembly/assembly/internal/Actual/clearActual
  call $node_modules/@as-pect/assembly/assembly/internal/Expected/clearExpected
  local.get $6
  call $~lib/rt/pure/__release
  i32.const 2256
  call $~lib/rt/pure/__release
 )
 (func $start:assembly/__tests__/index.test~anonymous|0~anonymous|0
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  i32.const 1
  i32.const 1
  f64.const 0.5
  f64.const 0
  f64.const 0
  i32.const 0
  i32.const 1
  i32.const 0
  call $assembly/index/generate
  local.tee $0
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/expect<~lib/typedarray/Uint8ClampedArray>
  local.tee $1
  i32.const 4
  i32.const 0
  i32.const 7
  i32.const 1552
  call $~lib/rt/__newArray
  call $~lib/rt/pure/__retain
  local.tee $2
  call $assembly/__tests__/index.test/u8caFromArray
  local.tee $3
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/typedarray/Uint8ClampedArray>#toStrictEqual
  local.get $0
  call $~lib/rt/pure/__release
  local.get $1
  call $~lib/rt/pure/__release
  local.get $2
  call $~lib/rt/pure/__release
  local.get $3
  call $~lib/rt/pure/__release
 )
 (func $start:assembly/__tests__/index.test~anonymous|0~anonymous|1
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  i32.const 2
  i32.const 2
  f64.const 0.5
  f64.const 0
  f64.const 0
  i32.const 1
  i32.const 2
  i32.const 0
  call $assembly/index/generate
  local.tee $0
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/expect<~lib/typedarray/Uint8ClampedArray>
  local.tee $1
  i32.const 8
  i32.const 0
  i32.const 7
  i32.const 2416
  call $~lib/rt/__newArray
  call $~lib/rt/pure/__retain
  local.tee $2
  call $assembly/__tests__/index.test/u8caFromArray
  local.tee $3
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/typedarray/Uint8ClampedArray>#toStrictEqual
  local.get $0
  call $~lib/rt/pure/__release
  local.get $1
  call $~lib/rt/pure/__release
  local.get $2
  call $~lib/rt/pure/__release
  local.get $3
  call $~lib/rt/pure/__release
 )
 (func $start:assembly/__tests__/index.test~anonymous|0~anonymous|2
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  i32.const 2
  i32.const 2
  f64.const 0.5
  f64.const 0
  f64.const 0
  i32.const 1
  i32.const 2
  i32.const 1
  call $assembly/index/generate
  local.tee $0
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/expect<~lib/typedarray/Uint8ClampedArray>
  local.tee $1
  i32.const 8
  i32.const 0
  i32.const 7
  i32.const 2576
  call $~lib/rt/__newArray
  call $~lib/rt/pure/__retain
  local.tee $2
  call $assembly/__tests__/index.test/u8caFromArray
  local.tee $3
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/typedarray/Uint8ClampedArray>#toStrictEqual
  local.get $0
  call $~lib/rt/pure/__release
  local.get $1
  call $~lib/rt/pure/__release
  local.get $2
  call $~lib/rt/pure/__release
  local.get $3
  call $~lib/rt/pure/__release
 )
 (func $start:assembly/__tests__/index.test~anonymous|0~anonymous|3
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  i32.const 1
  i32.const 1
  f64.const 20
  f64.const 0.4
  f64.const -0.3
  i32.const 1
  i32.const 1
  i32.const 0
  call $assembly/index/generate
  local.tee $0
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/expect<~lib/typedarray/Uint8ClampedArray>
  local.tee $1
  i32.const 4
  i32.const 0
  i32.const 7
  i32.const 2736
  call $~lib/rt/__newArray
  call $~lib/rt/pure/__retain
  local.tee $2
  call $assembly/__tests__/index.test/u8caFromArray
  local.tee $3
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<~lib/typedarray/Uint8ClampedArray>#toStrictEqual
  local.get $0
  call $~lib/rt/pure/__release
  local.get $1
  call $~lib/rt/pure/__release
  local.get $2
  call $~lib/rt/pure/__release
  local.get $3
  call $~lib/rt/pure/__release
 )
 (func $start:assembly/__tests__/index.test~anonymous|0
  i32.const 1328
  i32.const 2288
  call $node_modules/@as-pect/assembly/assembly/internal/Test/test
  i32.const 2320
  i32.const 2448
  call $node_modules/@as-pect/assembly/assembly/internal/Test/test
  i32.const 2480
  i32.const 2608
  call $node_modules/@as-pect/assembly/assembly/internal/Test/test
  i32.const 2640
  i32.const 2768
  call $node_modules/@as-pect/assembly/assembly/internal/Test/test
 )
 (func $start:node_modules/@as-pect/assembly/assembly/internal/noOp~anonymous|0
  nop
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/call/__call (param $0 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $0
  i32.const 0
  global.set $~argumentsLength
  local.get $0
  i32.load
  call_indirect (type $none_=>_none)
  local.get $0
  call $~lib/rt/pure/__release
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/log/__ignoreLogs (param $0 i32)
  nop
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/RTrace/__getUsizeArrayId (result i32)
  i32.const 9
 )
 (func $~start
  global.get $~started
  if
   return
  else
   i32.const 1
   global.set $~started
  end
  i32.const 1248
  i32.const 2800
  call $node_modules/@as-pect/assembly/assembly/internal/Test/describe
 )
 (func $~lib/rt/pure/decrement (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 268435455
  i32.and
  local.set $1
  local.get $0
  call $~lib/rt/rtrace/ondecrement
  local.get $0
  i32.load
  i32.const 1
  i32.and
  if
   i32.const 0
   i32.const 1120
   i32.const 122
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 1
  i32.eq
  if
   block $__inlined_func$~lib/rt/__visit_members
    block $folding-inner0
     block $switch$1$default
      block $switch$1$case$13
       block $switch$1$case$12
        block $switch$1$case$6
         block $switch$1$case$4
          local.get $0
          i32.const 12
          i32.add
          i32.load
          br_table $__inlined_func$~lib/rt/__visit_members $__inlined_func$~lib/rt/__visit_members $switch$1$case$4 $switch$1$case$4 $switch$1$case$6 $__inlined_func$~lib/rt/__visit_members $__inlined_func$~lib/rt/__visit_members $folding-inner0 $folding-inner0 $folding-inner0 $switch$1$case$12 $switch$1$case$13 $switch$1$default
         end
         local.get $0
         i32.load offset=20
         local.tee $1
         if
          local.get $1
          call $~lib/rt/pure/__visit
         end
         br $__inlined_func$~lib/rt/__visit_members
        end
        local.get $0
        i32.load offset=24
        local.tee $1
        if
         local.get $1
         call $~lib/rt/pure/__visit
        end
        br $__inlined_func$~lib/rt/__visit_members
       end
       local.get $0
       i32.load offset=20
       call $~lib/rt/pure/__visit
       local.get $0
       i32.load offset=28
       call $~lib/rt/pure/__visit
       br $__inlined_func$~lib/rt/__visit_members
      end
      local.get $0
      i32.load offset=24
      call $~lib/rt/pure/__visit
      br $__inlined_func$~lib/rt/__visit_members
     end
     unreachable
    end
    local.get $0
    i32.load offset=20
    call $~lib/rt/pure/__visit
   end
   local.get $2
   i32.const -2147483648
   i32.and
   if
    i32.const 0
    i32.const 1120
    i32.const 126
    i32.const 18
    call $~lib/builtins/abort
    unreachable
   end
   global.get $~lib/rt/tlsf/ROOT
   local.get $0
   call $~lib/rt/tlsf/freeBlock
  else
   local.get $1
   i32.eqz
   if
    i32.const 0
    i32.const 1120
    i32.const 136
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   local.get $1
   i32.const 1
   i32.sub
   local.get $2
   i32.const -268435456
   i32.and
   i32.or
   i32.store offset=4
  end
 )
 (func $~lib/rt/pure/__visit (param $0 i32)
  local.get $0
  i32.const 2948
  i32.lt_u
  if
   return
  end
  local.get $0
  i32.const 20
  i32.sub
  call $~lib/rt/pure/decrement
 )
)

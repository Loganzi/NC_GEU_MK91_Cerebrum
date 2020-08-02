set ns [new Simulator]
set nf [open out.nam w]
$ns namtrace-all $nf
set tf [open lan.tr w]
$ns trace-all $tf

set proto rlm
$ns color 2 blue
$ns color 3 red


set n0 [$ns node]
set n1 [$ns node]
set n2 [$ns node]
set n3 [$ns node]
set n4 [$ns node]
set n5 [$ns node]
set n6 [$ns node]

$n4 shape hexagon

$ns duplex-link $n0 $n4 50Mb 1ms DropTail
$ns duplex-link $n1 $n4 50Mb 1ms DropTail
$ns duplex-link $n2 $n4 50Mb 1ms DropTail
$ns duplex-link $n3 $n4 50Mb 1ms DropTail
$ns duplex-link $n4 $n5 50Mb 1ms DropTail
$ns duplex-link $n4 $n6 50Mb 1ms DropTail


set udp0 [new Agent/UDP]
set null0 [new Agent/Null]
$ns attach-agent $n2 $udp0                   
$ns attach-agent $n4 $null0
$ns connect $udp0 $null0
$udp0 set fid_ 2
set cbr0 [new Application/Traffic/CBR]
$cbr0 attach-agent $udp0
$cbr0 set rate_ 9Mb

set udp1 [new Agent/UDP]
set null1 [new Agent/Null]
$ns attach-agent $n4 $udp1             
$ns attach-agent $n5 $null1
$ns connect $udp1 $null1
$udp1 set fid_ 3
set cbr1 [new Application/Traffic/CBR]
$cbr1 attach-agent $udp1
$cbr1 set rate_ 9Mb

set udp2 [new Agent/UDP]
set null2 [new Agent/Null]
$ns attach-agent $n5 $udp2                
$ns attach-agent $n4 $null2           
$ns connect $udp2 $null2
$udp2 set fid_ 2
set cbr2 [new Application/Traffic/CBR]
$cbr2 attach-agent $udp2
$cbr2 set rate_ 9Mb

set udp3 [new Agent/UDP]
set null3 [new Agent/Null]
$ns attach-agent $n4 $udp3                
$ns attach-agent $n6 $null3           
$ns connect $udp3 $null3
$udp3 set fid_ 3
set cbr3 [new Application/Traffic/CBR]
$cbr3 attach-agent $udp3
$cbr3 set rate_ 9Mbs

set udp4 [new Agent/UDP]
set null4 [new Agent/Null]
$ns attach-agent $n6 $udp4                
$ns attach-agent $n4 $null4           
$ns connect $udp4 $null4
$udp4 set fid_ 2
set cbr4 [new Application/Traffic/CBR]
$cbr4 attach-agent $udp4
$cbr4 set rate_ 9Mbs

set udp5 [new Agent/UDP]
set null5 [new Agent/Null]
$ns attach-agent $n4 $udp5                
$ns attach-agent $n2 $null5           
$ns connect $udp5 $null5
$udp5 set fid_ 3
set cbr5 [new Application/Traffic/CBR]
$cbr5 attach-agent $udp5
$cbr5 set rate_ 9Mbs



$ns at 0.20 "$cbr0 start"     
$ns at 0.30 "$cbr0 stop"

$ns at 0.30 "$cbr1 start"     
$ns at 0.40 "$cbr1 stop"

$ns at 0.40 "$cbr2 start"     
$ns at 0.50 "$cbr2 stop"

$ns at 0.50 "$cbr3 start"     
$ns at 0.60 "$cbr3 stop"

$ns at 0.60 "$cbr4 start"     
$ns at 0.70 "$cbr4 stop"

$ns at 0.70 "$cbr5 start"     
$ns at 0.80 "$cbr5 stop"

proc finish {} {
global tf ns nf
$ns flush-trace
close $tf
close $nf
exit 0
}
$ns at 9.0 "finish"
$ns run











Sat Jun 26
- Comtinue implementing query (jsonb_agg) for getting reviews from postgres
- Current speed for getting reviews on 11008:
Status: 200 OK
Size: 2.42 KB
Time: 4.41 s

"Seq Scan on questions  (cost=0.00..8169534.57 rows=9 width=116) (actual time=735.729..3163.416 rows=4 loops=1)"
"  Filter: ((product_id = 11008) AND (reported = 0))"
"  Rows Removed by Filter: 3518963"
"  SubPlan 2"
"    ->  Aggregate  (cost=894934.45..894934.46 rows=1 width=32) (actual time=686.701..686.701 rows=1 loops=4)"
"          ->  Seq Scan on answers  (cost=0.00..207166.85 rows=10 width=80) (actual time=166.982..424.105 rows=2 loops=4)"
"                Filter: (questions.id = question_id)"
"                Rows Removed by Filter: 6879304"
"          SubPlan 1"
"            ->  Aggregate  (cost=68776.75..68776.76 rows=1 width=32) (actual time=131.268..131.268 rows=1 loops=8)"
"                  ->  Seq Scan on photos  (cost=0.00..68776.74 rows=1 width=132) (actual time=81.244..131.254 rows=0 loops=8)"
"                        Filter: (answers.id = answer_id)"
"                        Rows Removed by Filter: 2063759"
"Planning Time: 0.294 ms"
"JIT:"
"  Functions: 18"
"  Options: Inlining true, Optimization true, Expressions true, Deforming true"
"  Timing: Generation 1.239 ms, Inlining 48.318 ms, Optimization 71.709 ms, Emission 45.062 ms, Total 166.328 ms"
"Execution Time: 3199.905 ms"

After Indexing

"Index Scan using questions_index on questions  (cost=0.43..848.28 rows=9 width=116) (actual time=0.061..0.121 rows=4 loops=1)"
"  Index Cond: (product_id = 11008)"
"  Filter: (reported = 0)"
"  SubPlan 2"
"    ->  Aggregate  (cost=93.28..93.30 rows=1 width=32) (actual time=0.024..0.024 rows=1 loops=4)"
"          ->  Index Scan using answers_index on answers  (cost=0.43..8.61 rows=10 width=80) (actual time=0.003..0.004 rows=2 loops=4)"
"                Index Cond: (question_id = questions.id)"
"          SubPlan 1"
"            ->  Aggregate  (cost=8.45..8.46 rows=1 width=32) (actual time=0.004..0.004 rows=1 loops=8)"
"                  ->  Index Scan using photos_index on photos  (cost=0.43..8.45 rows=1 width=132) (actual time=0.001..0.002 rows=0 loops=8)"
"                        Index Cond: (answer_id = answers.id)"
"Planning Time: 0.123 ms"
"Execution Time: 0.148 ms"
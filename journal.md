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

pg_restore: while PROCESSING TOC:
pg_restore: from TOC entry 3033; 0 0 ACL TABLE answers postgres
pg_restore: error: could not execute query: ERROR:  role "tristan" does not exist
Command was: GRANT ALL ON TABLE public.answers TO tristan;
pg_restore: creating ACL "public.SEQUENCE answers_id_seq"
pg_restore: from TOC entry 3035; 0 0 ACL SEQUENCE answers_id_seq postgres
pg_restore: error: could not execute query: ERROR:  role "tristan" does not exist
Command was: GRANT ALL ON SEQUENCE public.answers_id_seq TO tristan;
pg_restore: creating ACL "public.TABLE photos"
pg_restore: from TOC entry 3036; 0 0 ACL TABLE photos postgres
pg_restore: error: could not execute query: ERROR:  role "tristan" does not exist
Command was: GRANT ALL ON TABLE public.photos TO tristan;
pg_restore: creating ACL "public.SEQUENCE photos_id_seq"
pg_restore: from TOC entry 3038; 0 0 ACL SEQUENCE photos_id_seq postgres
pg_restore: error: could not execute query: ERROR:  role "tristan" does not exist
Command was: GRANT ALL ON SEQUENCE public.photos_id_seq TO tristan;
pg_restore: creating ACL "public.TABLE questions"
pg_restore: from TOC entry 3039; 0 0 ACL TABLE questions postgres
pg_restore: error: could not execute query: ERROR:  role "tristan" does not exist
Command was: GRANT ALL ON TABLE public.questions TO tristan;
pg_restore: creating ACL "public.SEQUENCE questions_id_seq"
pg_restore: from TOC entry 3041; 0 0 ACL SEQUENCE questions_id_seq postgres
pg_restore: error: could not execute query: ERROR:  role "tristan" does not exist
Command was: GRANT ALL ON SEQUENCE public.questions_id_seq TO tristan;
pg_restore: warning: errors ignored on restore: 6


AWS EC2 POSTGRES QUERY
"Index Scan using questions_index on questions  (cost=0.43..771.90 rows=9 width=116) (actual time=0.039..0.272 rows=6 loops=1)"
"  Index Cond: (product_id = 11001)"
"  Filter: (reported = 0)"
"  SubPlan 2"
"    ->  Aggregate  (cost=84.80..84.81 rows=1 width=32) (actual time=0.036..0.037 rows=1 loops=6)"
"          ->  Index Scan using answers_index on answers  (cost=0.43..8.59 rows=9 width=79) (actual time=0.004..0.006 rows=1 loops=6)"
"                Index Cond: (question_id = questions.id)"
"          SubPlan 1"
"            ->  Aggregate  (cost=8.45..8.46 rows=1 width=32) (actual time=0.006..0.007 rows=1 loops=8)"
"                  ->  Index Scan using photos_index on photos  (cost=0.43..8.45 rows=1 width=132) (actual time=0.003..0.003 rows=0 loops=8)"
"                        Index Cond: (answer_id = answers.id)"
"Planning Time: 0.184 ms"
"Execution Time: 0.327 ms"

We are 3X slower than on localhost
#!/usr/bin/awk -f

BEGIN {
    printf("var clm_raw_characters = [\n");
}

{
    printf("\tnew ClmCharacter('%s', %s, %s, []),\n", $1, $2, $3)
}

END {
    printf("]\n");
}

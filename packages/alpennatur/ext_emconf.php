<?php

/**
 * Extension Manager/Repository config file for ext "alpennatur".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'alpennatur',
    'description' => '',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'bootstrap_package' => '15.0.0-15.99.99',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'Fhooe\\Alpennatur\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Livia Lang',
    'author_email' => 's2310456011@fhooe.at',
    'author_company' => 'fhooe',
    'version' => '1.0.0',
];
